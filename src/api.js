const express = require('express');
const userController = require('./controllers/usersController');
const { 
  validDisplayName, 
  validEmail, 
  validPassword, 
} = require('./middlewares/validationsMiddleware;');

// ...

const app = express();

app.use(express.json());

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

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
