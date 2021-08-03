const fs = require('fs');
const bcryptjs = require('bcryptjs');
const path = require('path');
const { validationResult } = require('express-validator');

const User = require('../models/Users');

const usersFilePath = path.join(__dirname, '../database/db-user-ignored.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controlador = {
	// ** Muestra el formulario de registro
	signup: (req, res) => {
		res.render('signup');
	},

	// Proceso del registro
	processRegister: (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('signup', { errors: resultValidation.mapped(), oldData: req.body });
		}

		let userInDB = User.findByField('email', req.body.email);

		if (userInDB) {
			return res.render('signup', {
				errors: {
					email: {
						msg: 'Este email ya está registrado',
					},
				},
				oldData: req.body,
			});
		}

		let userToCreate = {
			...req.body,
			password: bcryptjs.hashSync(req.body.password, 10),
			image: req.file.filename,
		};

		let userCreated = User.create(userToCreate);
		return res.redirect('/login');
	},
};

module.exports = controlador;
