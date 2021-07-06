const express = require('express');
const router = express.Router();
const productCartController = require('../controllers/productCartController');
// const destinodata = require('../database/data.json');

router.get('/', productCartController.productCar);

module.exports = router;
