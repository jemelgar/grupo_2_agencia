const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
// const { v4: obtencionID } = require('uuid');
// const { newProduct } = require('./adminController');
// obtencionID(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

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

		return res.send('Ok, las validaciones pasaron no tienen errores');
	},

	// storeUser: (req, res) => {
	// 	let newUser = {
	// 		id: obtencionID(),
	// 		nombre: req.body.nombre,
	// 		apellido: req.body.apellido,
	// 		correo: req.body.correo,
	// 		contrasena: req.body.contrasena,
	// 		image: req.file.filename,
	// 	};

	// 	users.push(newUser);
	// 	fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
	// 	// res.redirect('/signup');
	// 	res.redirect('/newUser');
	// },
};

module.exports = controlador;
