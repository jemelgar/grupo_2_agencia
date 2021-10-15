const express = require("express");
const router = express.Router();
const path = require("path");
const adminController = require("../controllers/adminController");
const multer = require("multer");
const adminMiddleware = require("../middlewares/adminMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const usersApiController = require("../controllers/api/usersApiController");
const productsApiController = require("../controllers/api/productsApiController");
const validateCreateProductMiddleware = require("../middlewares/validateCreateProductMiddleware");

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

router.get("/", authMiddleware, adminMiddleware, adminController.cpanel);
router.get("/tours", authMiddleware, adminMiddleware, adminController.index);
router.get("/edit/:id", authMiddleware, adminMiddleware, adminController.edit);
router.put(
  "/edit/:id",
  authMiddleware,
  adminMiddleware,
  upload.single("imagen"),
  adminController.saveEdit
);

router.get(
  "/newProduct",
  authMiddleware,
  adminMiddleware,
  adminController.newProduct
);
router.post(
  "/",
  adminMiddleware,
  upload.single("imagen"),
  validateCreateProductMiddleware,
  adminController.addProducto
);

router.delete(
  "/delete/:id",
  authMiddleware,
  adminMiddleware,
  adminController.delete
);

// Endpoint Api usuarios
router.get(
  "/usuariosApi",
  authMiddleware,
  adminMiddleware,
  usersApiController.list
);
router.get(
  "/usuariosApi/:id",
  authMiddleware,
  adminMiddleware,
  usersApiController.detail
);

//Endpoint Api productos
router.get(
  "/productosApi",
  authMiddleware,
  adminMiddleware,
  productsApiController.list
);
router.get(
  "/productosApi/:id",
  authMiddleware,
  adminMiddleware,
  productsApiController.detail
);

//------------------------------ ANTIGUAS RUTAS DE USUARIO CON RES.RENDER -------------------------- NO APIS
router.get("/usuarios", authMiddleware, adminMiddleware, adminController.list);
router.get(
  "/usuariosDetalle/:id",
  authMiddleware,
  adminMiddleware,
  adminController.detail
);

module.exports = router;
