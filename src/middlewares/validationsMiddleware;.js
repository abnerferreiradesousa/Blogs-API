const validEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
  if (!email) {
    return res
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }
  if (!emailRegex.test(email)) {
    return res
      .status(400)
      .json({ message: '"email" must be a valid email' });
  }
  next();
};

const validPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  }
  next();
};

const validDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res
      .status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  next();
};

module.exports = {
  validDisplayName,
  validEmail,
  validPassword,
};