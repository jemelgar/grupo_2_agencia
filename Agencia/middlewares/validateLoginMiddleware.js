// Login Validations 

const path = require('path');
const { body } = require('express-validator')

const validations = [
        body('email').notEmpty().withMessage('Escribe tu correo electrónico').bail()
        .isEmail().withMessage('Debes escribir un formato de correo válido'),
        body('password').notEmpty().withMessage('Escribe tu contraseña'),
      ];

module.exports = validations;