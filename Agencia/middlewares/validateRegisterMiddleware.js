// Register Validation
const path = require('path');
const { body } = require('express-validator');
// const { check, validationResult } = require('express-validator/check');
const db = require('../database/models');
module.exports = [
	body('first_name').notEmpty().withMessage('Escribe tu nombre'),
	body('last_name').notEmpty().withMessage('Escribe tu apellido'),
	body('email')
		.notEmpty()
		.withMessage('Escribe tu correo electrónico')
		.bail()
		.isEmail()
		.withMessage('Debes escribir un formato de correo válido')
		.custom((value, { req }) => {
			return db.Usuario.findOne({
				where: {
					email: req.body.email,
				},
			}).then((user) => {
				if (user) {
					return Promise.reject('E-mail already in use');
				}
			});
		}),
	body('password').notEmpty().withMessage('Tienes  que  escribir  una  contraseña'),
	body('image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];

		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	}),
];
