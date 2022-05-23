const { BlogPost, User, Category } = require('../database/models');
const errorMessage = require('../utils/errorMessage');

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

  // const result = await Patient.findAll({
  //   include: { 
  //     model: Surgery,
  //     as: 'surgeries',
  //     attributes: {exclude: ['doctor']},
  //     through:{attributes:[]},
  //   },
  // });

const create = async (newPost, user) => {
  if (!user) throw errorMessage(404, 'User not found');
  const createdPost = await BlogPost.create({ ...newPost, userId: user.id });
  console.log('🚀newPost', newPost);
  console.log('🚀user', user);
  return createdPost.dataValues;
};

module.exports = {
  create,
  getById,
}; 
