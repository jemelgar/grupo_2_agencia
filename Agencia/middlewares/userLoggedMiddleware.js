const User = require('../models/Users');
const db = require('../database/models');

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;
	let emailInCookie = req.cookies.userEmail;
	// let userFromCookie = User.findByField('email', emailInCookie);
	if (emailInCookie) {
		db.Usuario.findOne({ where: { email: emailInCookie } }).then((userFromCookie) => {
			console.log('Usuario' + userFromCookie);
			if (userFromCookie) {
				req.session.userLogged = userFromCookie;
				console.log(emailInCookie);
			}

			if (req.session.userLogged) {
				res.locals.isLogged = true;
				res.locals.userLogged = req.session.userLogged;
			}

			next();
		});
	}
	console.log(emailInCookie);
	next();
}

module.exports = userLoggedMiddleware;
