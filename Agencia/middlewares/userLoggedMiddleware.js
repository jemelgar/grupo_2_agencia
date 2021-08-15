const User = require('../models/Users');

function userLoggedMiddleware(req, res, next){
    res.locals.isLogged = false;
    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged
    }
    // if(req.cookies){

    // let emailInCookie = req.cookies.userEmail
    // let userFromCookie = User.findByField('email', emailInCookie)
    // console.log(userFromCookie)
    // }

    next();
};

module.exports = userLoggedMiddleware