const express = require("express");
const path = require("path");
const app = express();
const destinodata = require("./data.json");
const port = 3000;

app.use(express.static("public"));

app.listen(process.env.PORT || port, () =>
  console.log(`Servidor corriendo en puerto ${port}`)
);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { ...destinodata });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/productCart", (req, res) => {
  res.render("productCart");
});
app.get("/productDetail", (req, res) => {
  res.render("productDetail", { ...destinodata });
});

app.get("/productDetail/:id", (req, res) => {
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
});

app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/fb", (req, res) => {
  res.redirect("https://www.facebook.com");
});
app.get("/ins", (req, res) => {
  res.redirect("https://www.instagram.com/");
});
app.get("/twi", (req, res) => {
  res.redirect("https://twitter.com/home");
});
app.get("/you", (req, res) => {
  res.redirect("https://www.youtube.com/");
});
app.get("*", (req, res) => {
  res.render("error");
});
