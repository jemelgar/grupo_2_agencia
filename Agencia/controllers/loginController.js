const { validationResult } = require('express-validator');
// const User = require('../models/Users');
const bcryptjs = require('bcryptjs');
const db = require('../database/models');
const controladorLogin = {
	login: (req, res) => {
		res.render('login');
	},
	loginProcess: (req, res) => {
		db.Usuario.findOne({
			where: {
				email: req.body.email,
			},
		}).then((userToLogin) => {
			if (userToLogin) {
				let comparePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
				if (comparePassword) {
					delete userToLogin.password;
					req.session.userLogged = userToLogin;

					if (req.body.remember_user) {
						res.cookie('userEmail', req.body.email, { maxAge: 1000 * 60 * 4 });
					}
					if (req.session.userLogged.id_tipo_usuario != 1) {
						return res.redirect('/login/profile');
					} else {
						return res.redirect('/admin');
					}
				} else {
					return res.render('login', {
						errors: {
							email: {
								msg: 'Las credenciales son inválidas',
							},
						},
					});
				}
			} else {
				return res.render('login', {
					errors: {
						email: {
							msg: 'El email no se encuentra registrado',
						},
					},
				});
			}
		});
	},
	profile: (req, res) => {
		// console.log(req.cookies.userEmail);
		// console.log(req.session.userLogged);
		return res.render('profile', {
			user: req.session.userLogged,
		});
	},

	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		// console.log(req.session);
		return res.redirect('/');
	},
};
module.exports = controladorLogin;
