const fs = require('fs');
const bcryptjs = require('bcryptjs');
const path = require('path');
const { validationResult } = require('express-validator');
const db = require('../database/models');

const User = require('../models/Users');
const prueba = require('../models/prueba');

const usersFilePath = path.join(__dirname, '../database/db-user-ignored.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controlador = {
	// ** Muestra el formulario de registro
	signup: (req, res) => {
		res.render('signup');
	},

	// Proceso del registro
	list: (req, res) => {
		db.Usuario.findAll({
			include: ['tipoUsuario'],
		}).then((usuarios) => {
			res.render('usuariosList.ejs', { usuarios });
		});
	},

	detail: (req, res) => {
		db.Usuario.findByPk(req.params.id, {
			include: ['tipoUsuario'],
		}).then((usuario) => {
			res.json(usuario);
		});
	},

	// ** Añadiendo funcion buscar

	// ** Funcion correo
	// correo: (req, res) => {
	// 	db.Usuario.findAll({
	// 		where: {
	// 			email: req.params.email,
	// 		},
	// 		// 		// attributes: ['firs_name'],
	// 	}).then((email) => {
	// 		console.log(JSON.stringify(email, null, 2));
	// 	});
	// },
	exist: (req, res) => {
		db.Usuario.findOne({
			where: {
				email: req.body.email,
			},
		})
			.then(function (user) {
				res.json(`User Exist: ${user}`);
			})
			.catch((error) => res.send(error));
	},

	processRegister: (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('signup', {
				errors: resultValidation.mapped(),
				oldData: req.body,
			});
		}

		db.Usuario.create({
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			email: req.body.email,
			password: bcryptjs.hashSync(req.body.password, 10),
			image: req.file.filename,
			// id: 2,
			id_tipo_usuario: 2,
		}).then((usuario) => {
			return res.redirect('/login');
		});
	},
	delete: (req, res) => {
		db.Usuario.destroy({
			where: {
				id: req.params.id,
			},
		})
			.then((response) => {
				return res.json(response);
			})
			.catch((error) => res.send(error));
	},
	update: function (req, res) {
		let movieId = req.params.id;
		db.Usuario.update(
			{
				first_name: req.body.first_name,
				last_name: req.body.last_name,
				email: req.body.email,
				password: req.body.password,
				// image: req.file.filename,
				// id_tipo_usuario: 2,
			},
			{
				where: { id: movieId },
			}
		)
			.then(() => {
				res.send('Usuario Actualizado');
			})
			.catch((error) => res.send(error));
	},
};

module.exports = controlador;

// console.log(controlador.correo());
