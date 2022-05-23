const { Category } = require('../database/models');

const create = async (name) => {
  const createdCategory = await Category.create({ name });
  return createdCategory;
};

module.exports = {
  create,
};