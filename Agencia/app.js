const express = require("express");
const path = require("path");
const app = express();
app.use(express.static("public"));
app.listen(3000, () => console.log("Servidor corriendo en puerto 3000"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("views/index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve("views/login.html"));
});

app.get("/productCart", (req, res) => {
  res.sendFile(path.resolve("views/productCart.html"));
});
app.get("/productDetail", (req, res) => {
  res.sendFile(path.resolve("views/productDetail.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.resolve("views/register.html"));
});
app.get("/signup", (req, res) => {
  res.sendFile(path.resolve("views/signup.html"));
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
  res.sendFile(path.resolve("views/error.html"));
});
