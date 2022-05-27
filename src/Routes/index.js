const router = require('express').Router();
const rescue = require('express-rescue');
const routeUser = require('./user');
const routeCategories = require('./categories');
const routePost = require('./post');
const routeLogin = require('./login');

router.use('/user', rescue(routeUser));

router.use('/categories', rescue(routeCategories));

router.use('/post', rescue(routePost));

router.use('/login', rescue(routeLogin));

module.exports = router;
