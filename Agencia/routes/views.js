const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const destinodata = require("../database/db-ignored.json");
const loginController = require("../controllers/loginController");
const indexController = require("../controllers/indexController");
const userController = require("../controllers/newUserController");
const signupController = require("../controllers/signupController");
const productCartController = require("../controllers/productCartController");
const productDetailController = require("../controllers/productDetailController");
const validateLoginMiddleware = require("../middlewares/validateLoginMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware")
const authMiddleware = require("../middlewares/authMiddleware")

// Almacenar archivos con multer
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
// Formulario de Login
router.get("/login",guestMiddleware, loginController.login);

// Procesar el Login
router.post("/login", validateLoginMiddleware , loginController.loginProcess)

// Perfil de Usuario
router.get("/login/profile",authMiddleware, loginController.profile)

// Logout
//router.get("/logout" ,authMiddleware, loginController.logout)

// Mi carrito
router.get("/mycart", productCartController.productCar);
router.post("/mycart/:id", productCartController.productCarById);

// Detalle de producto
// router.get("/tours", productDetailController.productDetail); //la ruta simplemente muestra todos los paquetes para un cliente
router.get("/tour/:id", productDetailController.productDetailID);


// Formulario de registro
router.get("/signup", signupController.signup);

// Proceso de registro
router.post("/newUser",uploadFile.single("imagen"),signupController.storeUser);

//mensaje de bienvenida al nuevo usuario (?)
router.get("/newUser", userController.newUser);
module.exports = router;
