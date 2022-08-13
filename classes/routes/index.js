const adminRouter = require('./admin');
const shopRouter = require('./shop');
const handlerError = require('./handlerError')

routes = (app) => {
    app.use('/admin', adminRouter)

    app.use(
        shopRouter,
        handlerError
    );
};

module.exports = routes;