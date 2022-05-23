const { PostCategory } = require('../database/models');

const create = (postId, categoryId) => {
  const createdPostCategory = PostCategory.create({ postId, categoryId });
  return createdPostCategory;
}; 

module.exports = {
  create,
};