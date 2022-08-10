const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use('/add-product', (req, res, next) => {
    res.send(`
        <h1>Add new Product</h1>
        <form action="/product" method="POST">
            <input type="text" name="title">
            <button type="submit">ADD</button>
        </form>
    `);
});

app.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/');
});

app.use((req, res, next) => {
    console.log('In the next middleware')
    res.send(`<h1>Hello from express</h1>`);
});

app.listen(3000);