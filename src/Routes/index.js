const router = require('express').Router();
const routeUser = require('./user');
const routeCategories = require('./categories');
const routePost = require('./post');
const routeLogin = require('./login');

router.use('/user', routeUser);

router.use('/categories', routeCategories);

router.use('/post', routePost);

router.use('/login', routeLogin);

module.exports = router;
