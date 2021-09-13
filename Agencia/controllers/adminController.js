const fs = require("fs");
const path = require("path");
const toursFilePath = path.join(__dirname, "../database/db-ignored.json");
const tours = JSON.parse(fs.readFileSync(toursFilePath, "utf-8"));
const { v4: getId } = require("uuid");
getId(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const db = require("../database/models");
let imgTemp = "";
const controlador = {
  cpanel: (req, res) => {
    res.render("admin/controlPanel");
  },
  index: (req, res) => {
    db.Producto.findAll().then((toursList) => {
      res.render("admin/listOfTours", { toursList });
    });
  },
  edit: (req, res) => {
    db.Producto.findByPk(req.params.id).then((destino) => {
      imgTemp = destino.img_destination;
      console.log(imgTemp);
      res.render("admin/editTour", { destino });
    });
  },
  saveEdit: (req, res) => {
    req.file ? (img = "/img/" + req.file.filename) : (img = imgTemp);
    db.Producto.update(
      {
        name: req.body.nombre,
        // date: req.body.fecha,
        img_destination: img,
        // rating: 5,
        description: req.body.descripcion,
        // price: req.body.precio,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.redirect("/admin/tours");
  },

  newProduct: (req, res) => {
    res.render("admin/newProduct");
  },

  addProducto: (req, res) => {
    let img = "/img/dest-0.jpg";
    req.file ? (img = "/img/" + req.file.filename) : "";

    db.Producto.create({
      destination_promoted: req.body.tipo,
      name: req.body.nombre,
      date: req.body.fecha,
      img_destination: img,
      rating: 5,
      description: req.body.descripcion,
      price: req.body.precio,
    }).then(() => {
      res.redirect("admin/tours" + "?" + Date.now());
    });
  },
  destroy: (req, res) => {
    let newData = tours.destinos;
    let newDeleteJson = newData.filter((newProducts) => {
      return newProducts.tag != req.params.id;
    });
    newdatabase = { destinos: newDeleteJson };

    fs.writeFileSync(toursFilePath, JSON.stringify(newdatabase, null, 2));

    res.redirect("/admin/tours");
  },
};

module.exports = controlador;
