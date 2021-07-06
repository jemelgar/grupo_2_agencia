const express = require('express');
const router = express.Router();
const destinodata = require('../database/data.json');
const productDetailController = require('../controllers/productDetailController');

router.get('/', productDetailController.productDetail);
router.get('/:id', productDetailController.productDetailID);
module.exports = router;
