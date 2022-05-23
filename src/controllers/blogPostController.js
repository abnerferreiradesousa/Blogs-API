const blogPostService = require('../services/blogPostService');
const userService = require('../services/userService');
const postCategoriesService = require('../services/postCategoriesService');
const categoryService = require('../services/categoryService');

const getAll = async (req, res) => {
    const blogPosts = await blogPostService.getAll();
    return res.status(200).json(blogPosts);
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await blogPostService.getById(id);
    return res.status(200).json(post);
  } catch (error) {
    next(error);    
  }
};

const create = async (req, res, next) => {
  try {
    const { email } = req.user.data;
    const { categoryIds, ...postData } = req.body;
    const isCategory = categoryIds
      .map((categoryId) => categoryService.getById(categoryId));
    const isCategoryResult = await Promise.all(isCategory);
    if (isCategoryResult.length) {
    const user = await userService.getUserByEmail(email);
    const createdPost = await blogPostService.create(postData, user.dataValues);
    const { id: postId } = createdPost;
    const created = categoryIds
      .map((categoryId) => postCategoriesService.create(postId, categoryId));
    await Promise.all(created);
    return res.status(201).json(createdPost);
    }
  } catch (error) {
    next(error);    
  }
};

module.exports = {
  create,
  getById,
  getAll,
};