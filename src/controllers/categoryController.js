const categoryService = require('../services/categoryService');
const { CREATED, OK_STATUS } = require('../utils/statusCode');

const getAll = async (req, res) => {
  const categories = await categoryService.getAll();
  return res.status(OK_STATUS).json(categories);
};

const create = async (req, res) => {
  const { name } = req.body;
  const createdCategory = await categoryService.create(name);
  return res.status(CREATED).json(createdCategory);
};

module.exports = {
  create,
  getAll,
};