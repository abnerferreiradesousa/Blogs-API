const { BlogPost, User, Category } = require('../database/models');
const postCategoriesService = require('./postCategoriesService');
const userService = require('./userService');
const errorMessage = require('../utils/errorMessage');

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
  if (!post) throw errorMessage(404, 'Post does not exist');
  return post;
};

const create = async (newPost, user) => {
  if (!user) throw errorMessage(404, 'User not found');
  const createdPost = await BlogPost.create({ ...newPost, userId: user.id });
  return createdPost.dataValues;
};

const findUserOwnerPost = async ({ data: { email } }, { userId }) => {
const { id } = await userService.getUserByEmail(email);
  if (!id || id !== userId) {
    throw errorMessage(401, 'Unauthorized user');
  }  
};

const checkPostExists = async (id) => {
  const postFounded = await BlogPost.findOne({ where: { id } });
  if (!postFounded) throw errorMessage(404, 'Post does not exist');
  return postFounded;
};

const remove = async (id, user) => {
  const postFounded = await checkPostExists(id);
  await findUserOwnerPost(user, postFounded);
  await postCategoriesService.remove(id);
  await BlogPost.destroy({ where: { id } });
};

const removeByUserId = async (userId) => {
  await BlogPost.destroy({ where: { userId } });
};

module.exports = {
  create,
  getById,
  getAll,
  remove,
  removeByUserId,
}; 
