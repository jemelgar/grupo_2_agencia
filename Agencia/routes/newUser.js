const express = require('express');
const router = express.Router();
const userController = require('../controllers/newUserController');
// const destinodata = require('../database/data.json');

router.get('/', userController.newUser);

module.exports = router;