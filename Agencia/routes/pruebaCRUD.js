const express = require("express");
const router = express.Router();
const controllerCrud = require("../controllers/controllerCRUD");

router.post("/", controllerCrud.create);

module.exports = router;
