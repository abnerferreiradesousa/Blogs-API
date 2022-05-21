const usersService = require('../services/usersServices');

const login = (req, res) => {
  const newUser = usersService.create();
  return res.status(201).json(newUser);
};

const create = (req, res) => {
  const newUser = usersService.create();
  return res.status(201).json(newUser);
};

module.exports = {
  create,
  login,
};