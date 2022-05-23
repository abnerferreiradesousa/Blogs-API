const categoryService = require('../services/categoryService');

const create = async (req, res) => {
  const { name } = req.body;
  const createdCategory = await categoryService.create(name);
  return res.status(201).json(createdCategory);
};

module.exports = {
  create,
};