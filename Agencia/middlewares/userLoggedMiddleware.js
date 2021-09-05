const User = require('../models/Users');
const db = require('../database/models');

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;
	let emailInCookie = req.cookies.userEmail;
	let userFromCookie = User.findByField('email', emailInCookie);

	if (userFromCookie) {
		req.session.userLogged = userFromCookie;
		// console.log(userFromCookie);
	}

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}

	next();
}

module.exports = userLoggedMiddleware;
