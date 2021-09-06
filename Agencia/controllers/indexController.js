const path = require("path");
const fs = require("fs");
// const toursFilePath = path.join(__dirname, "../database/db-ignored.json");
const db = require("../database/models");

const controlador = {
  index: (req, res) => {
    db.Producto.findAll().then((resultados) => {
      resultados.forEach(function (destino) {
        // destino.date = new Date(destino.date).toLocaleDateString("es-ES");
        // console.log(destino.date.toLocaleDateString("es-ES"));

        if (destino.destination_promoted == 0)
          destino.destination_promoted = "normal";
        else destino.destination_promoted = "destacado";
      });
      // console.log(resultados);

      // return res.send(resultados);
      res.render("index", { resultados });
    });
  },
};

module.exports = controlador;
