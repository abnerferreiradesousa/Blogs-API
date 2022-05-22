const usersService = require('../services/usersServices');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await usersService.login(email, password);
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

const create = (req, res) => {
  const newUser = usersService.create();
  return res.status(201).json(newUser);
};

module.exports = {
  create,
  login,
};