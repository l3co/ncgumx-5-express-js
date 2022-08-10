const express = require('express');
const app = express();
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }));
routes(app);

app.listen(3000);