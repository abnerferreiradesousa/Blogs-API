const { Category } = require('../database/models');

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
};