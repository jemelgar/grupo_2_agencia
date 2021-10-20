// const destinodata = require('../database/db-ignored.json');
const fs = require("fs");
const path = require("path");
// const toursFilePath = path.join(__dirname, "../database/db-ignored.json");
// const tours = JSON.parse(fs.readFileSync(toursFilePath, "utf-8"));
const db = require("../database/models");

const controlador = {
  productCar: (req, res) => {
    res.render("carrito");
  },

  productCarById: (req, res) => {
    let tourSelected;
    let formInfo = req.body;
    // console.log(req.body);

    db.Producto.findByPk(req.params.id).then((tourSelected) => {
      // console.log(tourSelected);
      res.render("carrito", { tourSelected, formInfo });
      //return res.json(tours);
    });

    // for (let tour of tours.destinos) {
    //   if (tour.tag == productId) {
    //     tourSelected = tour;
    //     break;
    //   }
    // }

    // res.render("carrito", { tourSelected, formInfo });
  },
};

module.exports = controlador;
