const { User } = require('../database/models');
const errorMessage = require('../utils/errorMessage');
const generateJWT = require('../utils/generateJWT');
const { 
  INVALID_FIELDS, 
  USER_ALREADY_REGISTERED,
  USER_NOT_EXISTS, 
} = require('../utils/messagesErrorText');
const { BAD_REQUEST, CONFLICT, NOT_FOUND } = require('../utils/statusCode');

const getUserByEmail = async (email) => User.findOne({ where: { email } });

const login = async (email, password) => {
  const user = await getUserByEmail(email);
  if (!user || user.password !== password) {
    throw errorMessage(BAD_REQUEST, INVALID_FIELDS);
  }
  const { password: passDB, ...userWithoutPassword } = user.dataValues;
  const token = generateJWT(userWithoutPassword);
  return token;
};

const create = async ({ displayName, email, password, image }) => {
  const userExists = await getUserByEmail(email);
  if (userExists) throw errorMessage(CONFLICT, USER_ALREADY_REGISTERED);
  const createdUser = await User.create({ displayName, email, password, image });
  const { password: passDB, ...userWithoutPassword } = createdUser.dataValues;
  const token = generateJWT(userWithoutPassword);
  return token;
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const getById = async (id) => {
  const user = await User.findOne({ 
    where: { id },
    attributes: { exclude: ['password'] },
 });
  if (!user) throw errorMessage(NOT_FOUND, USER_NOT_EXISTS);
  return user;
};

const remove = async (email) => {
  const { dataValues: { id } } = await getUserByEmail(email);
  await User.destroy({ where: { id } });
};

module.exports = {
  getUserByEmail,
  create,
  login,
  getAll,
  getById,
  remove,
};