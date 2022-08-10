const { Router } = require('express');

const router = Router();

router.get('/add-product', (req, res, next) => {
    res.send(`
        <h1>Add new Product</h1>
        <form action="/product" method="POST">
            <input type="text" name="title">
            <button type="submit">ADD</button>
        </form>
    `);
});

router.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/');
});

module.exports = router;