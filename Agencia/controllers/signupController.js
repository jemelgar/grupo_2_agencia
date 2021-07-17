const fs = require('fs');
const path = require('path');
const { v4: obtencionID } = require('uuid');
const { newProduct } = require('./adminController');
obtencionID(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const usersFilePath = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controlador = {
	signup: (req, res) => {
		res.render('signup');
	},

	storeUser: (req, res) => {
		let newUser = {
			id: obtencionID(),
			nombre: req.body.nombre,
			apellido: req.body.apellido,
			correo: req.body.correo,
			contrasena: req.body.contrasena,
			image: req.file.filename,
		};

		users.push(newUser);
		fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
		// res.redirect('/signup');
		res.redirect('/newUser');
	},
};

module.exports = controlador;
