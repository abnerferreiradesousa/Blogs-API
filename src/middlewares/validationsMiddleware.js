const {
  REQUIRED_FIELDS_ARE_MISSING,
  CATEGORY_IDS_NOT_FOUND,
  NAME_REQUIRED,
  DISPLAYNAME_MIN_CHARACTERS,
  PASSWORD_MIN_CHARACTERS,
  EMAIL_INVALID,
} = require('../utils/messagesErrorText');
const { BAD_REQUEST } = require('../utils/statusCode');

const validEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
  if (!email) {
    return res
      .status(BAD_REQUEST)
      .json({ message: REQUIRED_FIELDS_ARE_MISSING });
  }
  if (!emailRegex.test(email)) {
    return res
      .status(BAD_REQUEST)
      .json({ message: EMAIL_INVALID });
  }
  next();
};

const validPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res
      .status(BAD_REQUEST)
      .json({ message: REQUIRED_FIELDS_ARE_MISSING });
  }
  if (password.length < 6) {
    return res
      .status(BAD_REQUEST)
      .json({ message: PASSWORD_MIN_CHARACTERS });
  }
  next();
};

const validDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res
      .status(BAD_REQUEST)
      .json({ message: DISPLAYNAME_MIN_CHARACTERS });
  }
  next();
};

const validName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(BAD_REQUEST)
      .json({ message: NAME_REQUIRED });
  }
  next();
};

const validBlogPost = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content) {
    return res
      .status(BAD_REQUEST)
      .json({ message: REQUIRED_FIELDS_ARE_MISSING });
  }
  if (!categoryIds || !categoryIds.length) {
    return res
      .status(BAD_REQUEST)
      .json({ message: CATEGORY_IDS_NOT_FOUND });
  }
  next();
};

const validTitleAndContent = (req, res, next) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res
      .status(BAD_REQUEST)
      .json({ message: REQUIRED_FIELDS_ARE_MISSING });
  }
  next();
};

module.exports = {
  validTitleAndContent,
  validDisplayName,
  validPassword,
  validBlogPost,
  validEmail,
  validName,
};