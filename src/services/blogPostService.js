const { BlogPost, User, Category } = require('../database/models');
// const userService = require('./userService');
const errorMessage = require('../utils/errorMessage');

const getAll = async () => {
  const blogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return blogPosts;
};
 
const getById = async (id) => {
  const post = await BlogPost.findOne({ 
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!post) throw errorMessage(404, 'Post does not exist');
  return post;
};

const create = async (newPost, user) => {
  if (!user) throw errorMessage(404, 'User not found');

  const createdPost = await BlogPost.create({ ...newPost, userId: user.id });
  
  return createdPost.dataValues;
};

module.exports = {
  create,
  getById,
  getAll,
}; 
