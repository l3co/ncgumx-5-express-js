const path = require('path')
const express = require('express');

const app = express();

const nodePath = path.dirname(require.main.filename);

app.use(
    express.static(path.join(nodePath, '/public'))
)

app.get('/', (req, res) => {
    res.sendFile(path.join(nodePath, '/views', 'index.html'));
});

app.get('/users', (req, res, next) => {
    res.sendFile(path.join(nodePath, '/views', 'users.html'));
});

app.listen(3001);