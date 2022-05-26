const routeLogin = require('express').Router();
const { 
  validPassword, 
  validEmail,
} = require('../middlewares/validationsMiddleware');
const userController = require('../controllers/userController');

routeLogin.post(
  '/', 
  validEmail,
  validPassword,
  userController.login,
);

module.exports = routeLogin;