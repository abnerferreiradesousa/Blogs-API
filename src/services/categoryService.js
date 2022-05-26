const { Category } = require('../database/models');
const errorMessage = require('../utils/errorMessage');
const { CATEGORY_IDS_NOT_FOUND } = require('../utils/messagesErrorText');
const { BAD_REQUEST } = require('../utils/statusCode');

const getById = async (id) => {
  const category = await Category.findOne({ where: { id } });
  if (!category) throw errorMessage(BAD_REQUEST, CATEGORY_IDS_NOT_FOUND);
  return category;
};

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

const create = async (name) => {
  const createdCategory = await Category.create({ name });
  return createdCategory;
};

module.exports = {
  create,
  getAll,
  getById,
};