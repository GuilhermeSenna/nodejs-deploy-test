const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>My Node App -> ${process.env.TESTE}</h1>`);
});

app.get('/teste', (req, res) => {
    res.send('<h1>teste de roteamento </h1>');
});

app.listen(5000, () => {
    console.log('App listening on port 5000!');
});