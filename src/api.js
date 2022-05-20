const express = require('express');
const userController = require('./controllers/usersController');

// ...

const app = express();

app.use(express.json());

app.post('/login', userController.create);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
