const express = require("express");
const router = express.Router();
const path = require("path");
const adminController = require("../controllers/adminController");
const multer = require("multer");
const adminMiddleware = require("../middlewares/adminMiddleware");

// ********* Multer ********
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/img");
  },
  // nombre que se le dará al archivo
  filename: (req, file, cb) => {
    console.log(file);
    const newFilename = "group-" + Date.now() + path.extname(file.originalname);
    cb(null, newFilename);
  },
});

// ejecucion de multer
const upload = multer({ storage });

router.get("/", adminMiddleware, adminController.cpanel);
router.get("/tours", adminMiddleware, adminController.index);
router.get("/edit/:id", adminMiddleware, adminController.edit);
router.put(
  "/edit/:id",
  adminMiddleware,
  upload.single("imagen"),
  adminController.saveEdit
);

router.get("/newProduct", adminMiddleware, adminController.newProduct);
router.post(
  "/",
  adminMiddleware,
  upload.single("imagen"),
  adminController.addProducto
);

router.delete("/delete/:id", adminMiddleware,  adminController.delete);

module.exports = router;
