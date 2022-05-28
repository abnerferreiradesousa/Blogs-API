const blogPostService = require('../services/blogPostService');
// const userService = require('../services/userService');
// const postCategoriesService = require('../services/postCategoriesService');
// const categoryService = require('../services/categoryService');
const { OK_STATUS, CREATED, NO_CONTENT } = require('../utils/statusCode');

const getAll = async (req, res) => {
    const blogPosts = await blogPostService.getAll();
    return res.status(OK_STATUS).json(blogPosts);
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await blogPostService.getById(id);
    return res.status(OK_STATUS).json(post);
  } catch (error) {
    next(error);    
  }
};

const create = async (req, res, next) => {
  try {
    const { user: { data: { email } }, body } = req;
    const createdPost = await blogPostService.create(email, body);
    return res.status(CREATED).json(createdPost);
  } catch (error) {
    next(error);
  }
};

// const create = async (req, res, next) => {
//   try {
//     const { email } = req.user.data;
//     const { categoryIds, ...postData } = req.body;
//     const isCategory = categoryIds
//       .map((categoryId) => categoryService.getById(categoryId));
//     const isCategoryResult = await Promise.all(isCategory);
//     if (isCategoryResult.length) {
//     const user = await userService.getUserByEmail(email);
//     const createdPost = await blogPostService.create(postData, user.dataValues);
//     const { id: postId } = createdPost;
//     const created = categoryIds
//       .map((categoryId) => postCategoriesService.create(postId, categoryId));
//     await Promise.all(created);
//     return res.status(CREATED).json(createdPost);
//     }
//   } catch (error) {
//     next(error);    
//   }
// };

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { email } = req.user.data;
    const updatedPost = await blogPostService.update(email, id, req.body);
    return res.status(OK_STATUS).json(updatedPost);
  } catch (error) {
    next(error);   
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { email } = req.user.data; 
    await blogPostService.remove(id, email);
    return res.status(NO_CONTENT).end();
  } catch (error) {
    next(error);    
  }
};

const getByTerm = async (req, res, next) => {
  try {
    const { q } = req.query;
    const posts = await blogPostService.getByTerm(q);
    return res.status(OK_STATUS).json(posts);
  } catch (error) {
    next(error);    
  }
};

module.exports = {
  create,
  getById,
  getAll,
  remove,
  getByTerm,
  update,
};