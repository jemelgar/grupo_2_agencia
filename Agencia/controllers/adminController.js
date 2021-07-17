const fs = require("fs");
const destinodata = require("../database/data.json");

const controlador = {
  index: (req, res) => {
    // const{tipo,nombre, precio, fecha, tag, rating, descripcion} =req.body
    res.render("admin/listOfProductsToMod", { ...destinodata });
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
        res.render("admin/modProductId", { ...destino });
      }
    }
  },
  saveEdit: (req, res) => {
    const { nombre, rating, descripcion } = req.body;
    let newData = fs.readFileSync("database/data.json", "utf-8");
    let newDataJson = JSON.parse(newData);
    // res.send(req.params.id);

    newDataJson.destinos.forEach((element) => {
      if (element.tag == req.params.id) {
        // console.log("Entré al IF", element.tag);
        element.nombre = req.body.nombre;
        element.rating = req.body.rating;
        element.descripcion = req.body.descripcion;
        element.img = '/img/' + req.file.filename;
      }
    });

    fs.writeFileSync("database/data.json", JSON.stringify(newDataJson));
    res.redirect("/admin");
  },

  newProduct: (req, res) => {
    // const{tipo,nombre, precio, fecha, tag, rating, descripcion} =req.body
    res.render("admin/newProduct");
    // res.redirect("/admin");
  },
  addProducto: (req, res) => {
    const {
      tipo,
      nombre,
      precio,
      fecha,
      tag,
      rating,
      descripcion,
      img = "/img/dest-0.jpg",
    } = req.body;
    let newData = fs.readFileSync("database/data.json", "utf-8");
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
    let newDataconv = JSON.stringify(newDataJson);
    fs.writeFileSync("database/data.json", newDataconv);

    res.redirect("admin");
  },
  destroy: (req, res) => {
    
		//  let newData = fs.readFileSync("database/data.json", "utf-8");
    // let newDataJson = JSON.parse(newData);
		// let newDeleteJson =  destinodata.filter((newProducts) => {
    //   console.log(newDeleteJson)
		// 	return newProducts.id != req.params.id 
		// }); 
		// fs.writeFileSync(destinodata,JSON.stringify(newDeleteJson, null, 2)) 

		res.send('Hola'); 
	}
};

module.exports = controlador;
