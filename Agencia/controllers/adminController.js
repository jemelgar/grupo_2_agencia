const fs = require("fs");
const destinodata = require("../database/db-ignored.json");

const controlador = {
  cpanel: (req, res) => {
    res.render("admin/controlPanel");
  },
  index: (req, res) => {
    // const{tipo,nombre, precio, fecha, tag, rating, descripcion} =req.body
    res.render("admin/listOfTours", { ...destinodata });
    // res.redirect("/admin");
  },
  edit: (req, res) => {
    //guardamos la dirección del navegador en una variable para compararla con la propiedad tag de cada destino
    const productbyid = req.params.id;
    //iteramos sobre la colección de destinos, la información de cada uno se guarda temporalmente en la variable destino
    for (let destino of destinodata.destinos) {
      //recorremos la colección guardada en la variable destinodata con KEY destinos
      //Si lo que se escriba en la dirección coincide con el tag de algún destino...
      if (destino.tag === productbyid) {
        //Mandamos la información de ese objeto a la vista renderizada para su uso
        res.render("admin/editTour", { ...destino });
      }
    }
  },
  saveEdit: (req, res) => {
    const { nombre, rating, descripcion } = req.body;
    let newData = fs.readFileSync("database/db-ignored.json", "utf-8");
    let newDataJson = JSON.parse(newData);
    // res.send(req.params.id);

    newDataJson.destinos.forEach((element) => {
      if (element.tag == req.params.id) {
        // console.log("Entré al IF", element.tag);
        element.nombre = req.body.nombre;
        element.rating = req.body.rating;
        element.descripcion = req.body.descripcion;
        element.img = "/img/" + req.file.filename;
      }
    });

    // Identar con dos espacion
    let prettifyDatabase = JSON.stringify(newDataJson, null, 2);
    fs.writeFileSync("database/db-ignored.json", prettifyDatabase);
    res.redirect("/admin");
  },

  newProduct: (req, res) => {
    // const{tipo,nombre, precio, fecha, tag, rating, descripcion} =req.body
    res.render("admin/newProduct");
    // res.redirect("/admin");
  },
  addProducto: (req, res) => {
    const { tipo, nombre, precio, fecha, tag, rating, descripcion } = req.body;
    const img = "/img/" + req.file.filename;
    let newData = fs.readFileSync("database/db-ignored.json", "utf-8");

    let newDataJson = JSON.parse(newData);
    newDataJson.destinos.push({
      tipo,
      nombre,
      precio,
      fecha,
      tag,
      rating,
      descripcion,
      img,
    });
    // res.send(newDataJson.destinos)
    let newDataconv = JSON.stringify(newDataJson, null, 2);
    fs.writeFileSync("database/db-ignored.json", newDataconv);

    res.redirect("admin");
  },
  destroy: (req, res) => {
    let newData = JSON.parse(
      fs.readFileSync("database/db-ignored.json", "utf-8")
    );
    newData = newData.destinos;

    let newDeleteJson = newData.filter((newProducts) => {
      //   console.log(newDeleteJson)
      return newProducts.tag != req.params.id;
    });
    newdatabase = { destinos: newDeleteJson };
    fs.writeFileSync(
      "database/db-ignored.json",
      JSON.stringify(newdatabase, null, 2)
    );

    res.redirect("/");
  },
};

module.exports = controlador;
