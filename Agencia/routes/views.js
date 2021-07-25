const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const destinodata = require("../database/db-ignored.json");
const loginController = require("../controllers/loginController");
const indexController = require("../controllers/indexController");
const userController = require("../controllers/newUserController");
const signupController = require("../controllers/signupController");
const registerController = require("../controllers/registerController");
const productCartController = require("../controllers/productCartController");
const productDetailController = require("../controllers/productDetailController");

// ** Almacenar archivos con multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, './public/img');
    cb(null, "./public/img/usersImages");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
  },
});
const uploadFile = multer({ storage });

//home
router.get("/", indexController.index);
router.get("/home", indexController.index);

/********************CLIENTE************************** */
//login
router.get("/login", loginController.login);
//Mi carrito
router.get("/mycart", productCartController.productCar);
//detalle de producto
// router.get("/tours", productDetailController.productDetail); //la ruta simplemente muestra todos los paquetes para un cliente
router.get("/tour/:id", productDetailController.productDetailID);
//vista registro
router.get("/register", registerController.register);

// Vista de registro
router.get("/signup", signupController.signup);
// envío de datos de registro
router.post(
  "/newUser",
  uploadFile.single("imagen"),
  signupController.storeUser
);
//mensaje de bienvenida al nuevo usuario (?)
router.get("/newUser", userController.newUser);
module.exports = router;
