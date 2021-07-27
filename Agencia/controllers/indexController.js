const path = require("path");
const fs = require("fs");
const toursFilePath = path.join(__dirname, "../database/db-ignored.json");

const controlador = {
  index: (req, res) => {
    const tours = JSON.parse(fs.readFileSync(toursFilePath, "utf-8"));
    res.render("index", { ...tours });
  },
};

module.exports = controlador;
