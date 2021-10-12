// Register Validation
const path = require("path");
const { body } = require("express-validator");

// const { check, validationResult } = require('express-validator/check');
const db = require("../database/models");

const validations = [
  body("nombre")
    .notEmpty()
    .withMessage("Escribe el nombre del destino")
    .bail()
    .isLength({ min: 2 })
    .withMessage("Tu contraseña debe tener mínimo 8 caracteres"),

  body("precio").notEmpty().withMessage("Debes de introducir un precio"),
  body("fecha").notEmpty().withMessage("Debes de indicar una fecha"),
  body("descripcion").notEmpty().withMessage("Debes indicar una descripcion"),
  body("imagen").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".gif", ".jpeg"];

    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ", "
          )}`
        );
      }
    }

    return true;
  }),
];

module.exports = validations;
