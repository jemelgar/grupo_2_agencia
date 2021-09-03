const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const Usuario = require("../database/models/Usuario");

const User = {
  create: (req, res) => {
    // return res.json(req.body);
    db.Usuario.create(req.body).then((usuario) => {
      return res.status(200).json({
        data: usuario,
        status: 200,
        created: "Todo salio bien",
      });
    });
  },
};
module.exports = User;

// console.log(User.delete(11));
