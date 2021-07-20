const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const destinodata = require('../database/db-ignored.json');

router.get('/', indexController.index);

module.exports = router;
