const fs = require('fs');
const bcryptjs = require('bcryptjs');
const path = require('path');
const { validationResult } = require('express-validator');
const db = require('../database/models');
// const { where } = require('sequelize/types');

// const User = require('../models/Users');

const usersFilePath = path.join(__dirname, '../database/db-user-ignored.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controlador = {
	// ** Muestra el formulario de registro
	signup: (req, res) => {
		res.render('signup');
	},

	processRegister: (req, res) => {
		// !*Validaciones de middleware
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('signup', {
				errors: resultValidation.mapped(),
				oldData: req.body,
			});
		}

		// **Creando al usuario tanto para postman como vista
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

	edit: (req, res) => {
		let user = req.session.userLogged;

		imgTemp = user.image;
		console.log(imgTemp);
		res.render('usuarioEdit', { user: user });
		console.log(user);
	},

	// update: (req, res) => {
	// 	let user = req.session.userLogged;
	// 	console.log('--------------------------');
	// 	console.log(user);
	// 	req.file ? (img = req.file.filename) : (img = imgTemp);
	// 	db.Usuario.update(
	// 		{
	// 			first_name: req.body.first_name,
	// 			last_name: req.body.last_name,
	// 			email: req.body.email,
	// 			password: req.body.password,
	// 			image: img,
	// 		},
	// 		{ where: { id: user.id } }
	// 	).then((elemento) => {
	// 		console.log(elemento);
	// 		res.redirect('/login');
	// 	});
	// },

	update: (req, res) => {
		// let user = req.session.userLogged;
		req.file ? (img = req.file.filename) : (img = imgTemp);
		db.Usuario.findByPk(req.session.userLogged.id)
			.then((user) => {
				user.update({
					first_name: req.body.first_name,
					last_name: req.body.last_name,
					email: req.body.email,
					password: req.body.password,
					image: img,
				});
			})
			.then((user) => {
				req.session.userLogged = user;
				res.redirect('/login');
			})
			.catch((err) => {
				console.log(err);
			});
	},

	// update: function (req, res) {
	// 	let user = req.params.id;
	// 	db.Usuario.update(
	// 		{
	// 			first_name: req.body.first_name,
	// 			last_name: req.body.last_name,
	// 			email: req.body.email,
	// 			password: req.body.password,
	// 			// image: req.file.filename,
	// 			// id_tipo_usuario: 2,
	// 		},
	// 		{
	// 			where: { id: user },
	// 		}
	// 	)
	// 		.then(() => {
	// 			res.send('Usuario Actualizado');
	// 		})
	// 		.catch((error) => res.send(error));
	// },
};

module.exports = controlador;
