const fs = require("fs");
const path = require("path");
const toursFilePath = path.join(__dirname, "../database/db-ignored.json");
const tours = JSON.parse(fs.readFileSync(toursFilePath, "utf-8"));
const { v4: getId } = require("uuid");
getId(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const controlador = {
  cpanel: (req, res) => {
    res.render("admin/controlPanel");
  },
  index: (req, res) => {
    const toursList = JSON.parse(fs.readFileSync(toursFilePath, "utf-8"));
    res.render("admin/listOfTours", { ...toursList });
  },
  edit: (req, res) => {
    const productbyid = req.params.id;

    for (let destino of tours.destinos) {
      if (destino.tag === productbyid) {
        res.render("admin/editTour", { ...destino });
      }
    }
  },
  saveEdit: (req, res) => {
    let newDataJson = tours;
    newDataJson.destinos.forEach((element) => {
      if (element.tag == req.params.id) {
        element.nombre = req.body.nombre;
        element.descripcion = req.body.descripcion;
        if (req.file) {
          element.img = "/img/" + req.file.filename;
        }
      }
    });

    let prettifyDatabase = JSON.stringify(newDataJson, null, 2);
    fs.writeFileSync(toursFilePath, prettifyDatabase);
    res.redirect("/admin/tours");
  },

  newProduct: (req, res) => {
    res.render("admin/newProduct");
  },
  addProducto: (req, res) => {
    const { tipo, nombre, precio, fecha, descripcion } = req.body;
    const img = "/img/dest-0.jpg";
    req.file ? (img = "/img/" + req.file.filename) : "";

    let newDataJson = tours;
    newDataJson.destinos.push({
      tipo,
      nombre,
      precio,
      fecha,
      tag: getId(),
      rating: "⭐⭐⭐⭐⭐",
      descripcion,
      img,
    });

    let newDataconv = JSON.stringify(newDataJson, null, 2);
    fs.writeFileSync(toursFilePath, newDataconv);

    res.redirect("admin/tours" + "?" + Date.now());
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
