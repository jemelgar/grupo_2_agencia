const destinodata = require("../database/data.json");

const controlador = {
  productDetail: (req, res) => {
    res.render("productDetail", { ...destinodata });
  },
  productDetailID: (req, res) => {
    //guardamos la dirección del navegador en una variable para compararla con la propiedad tag de cada destino
    const productbyid = req.params.id;
    //iteramos sobre la colección de destinos, la información de cada uno se guarda temporalmente en la variable destino
    for (let destino of destinodata.destinos) {
      //recorremos la colección guardada en la variable destinodata con KEY destinos
      //Si lo que se escriba en la dirección coincide con el tag de algún destino...
      if (destino.tag === productbyid) {
        //Mandamos la información de ese objeto a la vista renderizada para su uso
        res.render("productid", { ...destino });
      }
    }
  },
};

module.exports = controlador;
