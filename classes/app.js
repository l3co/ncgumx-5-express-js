const path = require('path')
const express = require('express');
const app = express();
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
routes(app);

app.listen(3000);