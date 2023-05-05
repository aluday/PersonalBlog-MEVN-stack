const postRouter =  require("./postRouter");
const authRouter = require("./adminRouter");
const adminRouter = require("../controller/authController")

function route(app){
    app.use('/signin', adminRouter.signin);
    app.use('/blog', postRouter);
    app.use('/admin', authRouter);
}

module.exports = route;