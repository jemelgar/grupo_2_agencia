const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const signupController = require('../controllers/signupController');

// ** Almacenar archivos con multer
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		// cb(null, './public/img');
		cb(null, './public/img/usersImages');
	},
	filename: function (req, file, cb) {
		cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
	},
});
const uploadFile = multer({ storage });

// Creación de usuarios.
router.get('/', signupController.signup);
// router.post('/newUser', signupController.storeUser);
router.post(
	'/newUser',
	uploadFile.single('imagen'),
	signupController.storeUser
);
module.exports = router;
