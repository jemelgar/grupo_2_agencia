// const User = require('../models/Users');
const db = require('../database/models');
const { Op } = require('sequelize');
const sequelize = db.sequelize;

async function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	let emailInCookie = req.cookies.userEmail;
	let userFromCookie = await db.Usuario.findOne({
		where: {
			email: { [Op.like]: emailInCookie },
		},
	});

	if (userFromCookie) {
		req.session.userLogged = userFromCookie;
	}

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}

	next();
}

module.exports = userLoggedMiddleware;
