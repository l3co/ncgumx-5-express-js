const { Router } = require('express');

const router = Router();

router.get('/', (req, res, next) => {
    console.log('In the next middleware')
    res.send(`<h1>Hello from express</h1>`);
});

module.exports = router;