const adminRouter = require('./admin');
const shopRouter = require('./shop');

routes = (app) => {
    app.use(
        adminRouter,
        shopRouter
    );
};

module.exports = routes;