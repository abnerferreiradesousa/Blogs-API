const { User } = require('../database/models');
const errorMessage = require('../utils/errorMessage');
const generateJWT = require('../utils/generateJWT');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user || user.password !== password) {
    throw errorMessage(400, 'Invalid fields');
  }
  const { password: passDB, ...userWithoutPassword } = user.dataValues;
  const token = generateJWT(userWithoutPassword);
  return token;
};

const create = () => {
};

module.exports = {
  create,
  login,
};