const userService = require('../services/userService');
const { CREATED, OK_STATUS, NO_CONTENT } = require('../utils/statusCode');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await userService.login(email, password);
    return res
      .status(OK_STATUS)
      .json({ token });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const token = await userService.create(req.body);
    return res
      .status(CREATED)
      .json({ token });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const users = await userService.getAll(req.user); 
    return res
      .status(OK_STATUS)
      .json(users);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.getById(id);
    return res
      .status(OK_STATUS)
      .json(user);
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const { email } = req.user.data;
    await userService.remove(email);
    return res
      .status(NO_CONTENT)
      .end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  login,
  getAll,
  getById,
  remove,
};