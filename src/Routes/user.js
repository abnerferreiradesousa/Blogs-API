const routeUser = require('express').Router();
const { 
  validDisplayName,
  validPassword, 
  validEmail,
} = require('../middlewares/validationsMiddleware');
const authToken = require('../middlewares/authTokenMiddleware');

const userController = require('../controllers/userController');

routeUser.delete(
  '/me',
  authToken,
  userController.remove,
);

routeUser.get(
  '/:id',
  authToken, 
  userController.getById,
);

routeUser.get(
  '/',
  authToken, 
  userController.getAll,
);

routeUser.post(
  '/',
  validDisplayName,
  validEmail,
  validPassword,
  userController.create,
);

module.exports = routeUser;