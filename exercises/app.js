const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('Entry on root middleware');
    next();
});

app.use('/users', (req, res, next) => {
    res.send('<h1>User page</h1>')
});

app.listen(3001);