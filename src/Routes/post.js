const routePost = require('express').Router();
const blogPostController = require('../controllers/blogPostController');
const authToken = require('../middlewares/authTokenMiddleware');
const { validTitleAndContent,
  validBlogPost } = require('../middlewares/validationsMiddleware');

routePost.get(
  '/search',
  authToken,
  blogPostController.getByTerm,
);

routePost.delete(
  '/:id',
  authToken,
  blogPostController.remove,
);

routePost.put(
  '/:id',
  authToken,
  validTitleAndContent,
  blogPostController.update,
);

routePost.get(
  '/:id',
  authToken,
  blogPostController.getById,
);

routePost.get(
  '/',
  authToken,
  blogPostController.getAll,
);

routePost.post(
  '/',
  authToken,
  validBlogPost, 
  blogPostController.create,
);

module.exports = routePost;