const express = require('express');
const app = express();

//Importando arquivos de rota
const index = require('./route/index');
const livros = require('./route/livrosRoute');

app.use((req, res, next)  => {
    console.log('Nova requisição realizada');

    next();
});

app.use(express.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.use('/', index);
app.use('/livros', livros);

module.exports = app;