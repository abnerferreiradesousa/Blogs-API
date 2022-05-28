const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../database/models');
const userService = require('./userService');
const categoryService = require('./categoryService');
const postCategoriesService = require('./postCategoriesService');
const errorMessage = require('../utils/errorMessage');
const { NOT_FOUND, UNAUTHORIZED } = require('../utils/statusCode');
const {
  POST_NOT_EXISTS,
  USER_NOT_FOUND,
  UNAUTHORIZED_USER,
} = require('../utils/messagesErrorText');

const getAll = async () => {
  const blogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ] });
  return blogPosts;
};
 
const getById = async (id) => {
  const post = await BlogPost.findOne({ 
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ] });
  if (!post) throw errorMessage(NOT_FOUND, POST_NOT_EXISTS);
  return post;
};

// const create = async (newPost, user) => {
//   if (!user) throw errorMessage(NOT_FOUND, USER_NOT_FOUND);
//   const createdPost = await BlogPost.create({ ...newPost, userId: user.id });
//   return createdPost.dataValues;
// };

const categoryExists = async (categoryIds) => {
  const categoryIdFounded = categoryIds
    .map((categoryId) => categoryService.getById(categoryId));
  await Promise.all(categoryIdFounded);
};

const userExists = async (email) => {
  const { id } = await userService.getUserByEmail(email);
  if (!id) throw errorMessage(NOT_FOUND, USER_NOT_FOUND);
  return id;
};

const create = async (email, newPost) => {
  const { categoryIds, ...postOutCategoryIds } = newPost;
  const userId = await userExists(email);
  await categoryExists(categoryIds);
  const createdPost = await BlogPost.create({ userId, ...postOutCategoryIds });
  const { id: postId } = createdPost;
  const createdPostCategory = categoryIds
    .map((categoryId) => postCategoriesService.create(postId, categoryId));
  await Promise.all([createdPostCategory]);
  return createdPost;
};

const findUserOwnerPost = async (email, userId) => {
const { id } = await userService.getUserByEmail(email);
  if (!id || id !== userId) {
    throw errorMessage(UNAUTHORIZED, UNAUTHORIZED_USER);
  }  
};

const checkPostExists = async (id) => {
  const postFounded = await BlogPost.findOne({ where: { id } });
  if (!postFounded) throw errorMessage(NOT_FOUND, POST_NOT_EXISTS);
  return postFounded;
};

const update = async (email, id, { title, content }) => {
  const { userId } = await checkPostExists(id);
  await Promise.all([
    findUserOwnerPost(email, userId),
    BlogPost.update({ title, content }, { where: { id } }),
  ]);
  const updatedPost = await getById(id);
  return updatedPost;
};

const remove = async (id, email) => {
  const { userId } = await checkPostExists(id);
  await Promise.all([
    findUserOwnerPost(email, userId),
    BlogPost.destroy({ where: { id } }),
  ]);
};

const getByTerm = async (term) => {
  const postsFounded = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${term}%` } },
        { content: { [Op.like]: `%${term}%` } },
      ] },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return postsFounded.length ? postsFounded : [];
};

module.exports = {
  update,
  create,
  getAll,
  remove,
  getById,
  getByTerm,
}; 
