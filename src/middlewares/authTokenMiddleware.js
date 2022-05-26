const jwt = require('jsonwebtoken');
const errorMessage = require('../utils/errorMessage');
const { EXPIRED_OR_INVALID_TOKEN, TOKEN_NOT_FOUND } = require('../utils/messagesErrorText');
const { UNAUTHORIZED } = require('../utils/statusCode');

const authToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      res
        .status(UNAUTHORIZED)
        .json({ message: TOKEN_NOT_FOUND });
    }
    const decodeUser = jwt.verify(authorization, process.env.JWT_SECRET);
    req.user = decodeUser;
    next();
  } catch (error) {
    next(errorMessage(UNAUTHORIZED, EXPIRED_OR_INVALID_TOKEN));    
  }
};

module.exports = authToken;