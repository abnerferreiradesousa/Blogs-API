const jwt = require('jsonwebtoken');

 // secret key
// const senha = 'hulkEsmaga';

const jwtConfig = { // header
  expiresIn: '15m',
  algorithm: 'HS256',
};

const generateJWT = (payload) => {
  const token = jwt.sign(
    { data: payload }, 
    process.env.JWT_SECRET, 
    jwtConfig,
  );
  return token;
};

module.exports = generateJWT;