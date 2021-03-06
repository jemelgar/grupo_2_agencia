const express = require('express');
const multer = require('multer');
const path = require('path');
// const { body } = require('express-validator');
const router = express.Router();

// Requiriendo controladores
const destinodata = require('../database/db-ignored.json');
const loginController = require('../controllers/loginController');
const indexController = require('../controllers/indexController');
const signupController = require('../controllers/signupController');
const signupAdminController = require('../controllers/signupAdminController');
const productCartController = require('../controllers/productCartController');
const productDetailController = require('../controllers/productDetailController');

// Requiriendo Midlewares
const validateLoginMiddleware = require('../middlewares/validateLoginMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const validateRegisterMiddleware = require('../middlewares/validateRegisterMiddleware');
const uploadFile = require('../middlewares/multerMiddleware');
const { index } = require('../controllers/indexController');

// Almacenar archivos con multer para la vista de register
// const storage = multer.diskStorage({
// 	destination: function (req, file, cb) {
// 		// cb(null, './public/img');
// 		cb(null, './public/img/usersImages');
// 	},
// 	filename: function (req, file, cb) {
// 		cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
// 	},
// });
// const uploadFile = multer({ storage });

//home
router.get('/', indexController.index);
router.get('/home', indexController.index);
router.get('/search', indexController.search);
router.get('/tour/:id', indexController.detail);
//router.delete('/tour/:id', indexController.delete);
/********************CLIENTE************************** */
// Formulario de Login
router.get('/login', guestMiddleware, loginController.login);

// Procesar el Login
router.post('/login', validateLoginMiddleware, loginController.loginProcess);

// Perfil de Usuario
router.get('/login/profile', authMiddleware, loginController.profile);

// Logout
router.get('/logout', authMiddleware, loginController.logout);

// Mi carrito
router.get('/mycart', productCartController.productCar);
router.post('/mycart/:id', productCartController.productCarById);

// Detalle de producto
// router.get("/tours", productDetailController.productDetail); //la ruta simplemente muestra todos los paquetes para un cliente
//router.get('/tour/:id', indexController.detail);

// FORMULARIO DE REGISTRO

// Formulario de registro
router.get('/signup', guestMiddleware, signupController.signup);

// Registro de administradores
router.get('/signupAdmin', guestMiddleware, signupAdminController.signup);
// Procesar registro
router.post('/signup', uploadFile.single('image'), validateRegisterMiddleware, signupController.processRegister);
// Procesar registro administradores
router.post(
	'/signupAdmin',
	uploadFile.single('image'),
	validateRegisterMiddleware,
	signupAdminController.processRegister
);

router.delete('/usuarios/:id', signupController.delete);
router.get('/usuarioEdit/:id', validateRegisterMiddleware, signupController.edit);
router.put('/usuarioEdit/:id', uploadFile.single('image'), validateRegisterMiddleware, signupController.update);

module.exports = router;
