const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');

// ...
// MELHORIAS

// transactions
// testes de integração
// rescue

const app = express();

app.use(express.json());

app.use('/', require('./Routes'));

app.use(errorMiddleware);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
