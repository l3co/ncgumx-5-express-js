const path = require('path')

const { Router } = require('express');

const router = Router()

router.use((req, res, next) => {
    res
        .status(404)
        .sendFile(path.join(__dirname, '../', 'views', '404.html'));
});

module.exports = router;