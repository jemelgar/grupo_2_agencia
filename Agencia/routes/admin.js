const express = require("express");
const router = express.Router();
const path = require('path');
const adminController = require("../controllers/adminController");
const multer = require('multer');

// ********* Multer ********
 const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './public/img')
    },
    // nombre que se le dará al archivo
    filename: (req, file, cb)=>{
        console.log(file);
        const newFilename = 'group-' + Date.now() + path.extname(file.originalname) ;
        cb(null, newFilename)
    }
});

// ejecucion de multer
const upload = multer({ storage })


router.get("/", adminController.index);
router.get("/edit/:id", adminController.edit);
router.put("/edit/:id",upload.single('imagen'), adminController.saveEdit);

router.post("/", adminController.addProducto);
router.get("/new", adminController.newProduct);

router.delete('/edit/:id', adminController.destroy); 


module.exports = router;
