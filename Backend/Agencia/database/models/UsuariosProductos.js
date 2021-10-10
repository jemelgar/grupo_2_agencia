module.exports = (sequelize, dataTypes) => {
  let alias = "usuariosproductos";
  let cols = {
    id_productos: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    id_usuarios: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
  };
  let config = {
    timestamps: false,
    tableName: "usuariosproductos",
  };
  const usuariosproductos = sequelize.define(alias, cols, config);

  return usuariosproductos;
};
