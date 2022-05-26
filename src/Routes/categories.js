const routeCategories = require('express').Router();
const categoryController = require('../controllers/categoryController');
const { validName } = require('../middlewares/validationsMiddleware');
const authToken = require('../middlewares/authTokenMiddleware');

routeCategories.get(
  '/',
  authToken, 
  categoryController.getAll,
);

routeCategories.post(
  '/',
  authToken,
  validName,
  categoryController.create,
);

module.exports = routeCategories;