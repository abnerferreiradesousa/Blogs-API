const express = require('express');
const userController = require('./controllers/userController');
const categoryController = require('./controllers/categoryController');
const { 
  validDisplayName, 
  validPassword, 
  validEmail,
  validName,
} = require('./middlewares/validationsMiddleware');
const authToken = require('./middlewares/authTokenMiddleware');

// ...

const app = express();

app.use(express.json());

app.post(
  '/categories',
  authToken,
  validName,
  categoryController.create,
);

app.get(
  '/user/:id',
  authToken, 
  userController.getById,
);

app.get(
  '/user',
  authToken, 
  userController.getAll,
);

app.post(
  '/login', 
  validEmail,
  validPassword,
  userController.login,
);

app.post(
  '/user',
  validDisplayName,
  validEmail,
  validPassword,
  userController.create,
);

app.use((err, _req, res, _next) => {
  res
    .status(err.status)
    .json({ message: err.message });
});

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
