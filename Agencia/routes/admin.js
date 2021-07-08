const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/", adminController.index);
router.get("/edit/:id", adminController.edit);
router.put("/edit/:id", adminController.saveEdit);

router.post("/", adminController.addProducto);
router.get("/new", adminController.newProduct);

module.exports = router;
