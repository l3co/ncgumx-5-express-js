const adminRouter = require('./admin');
const shopRouter = require('./shop');
const handlerError = require('./handlerError')

routes = (app) => {
    app.use(
        adminRouter,
        shopRouter,
        handlerError
    );
};

module.exports = routes;