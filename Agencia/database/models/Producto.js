module.exports = (sequelize, dataTypes) => {
  let alias = "Producto";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    destination_promoted: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: dataTypes.DATE,
      allowNull: false,
    },
    img_destination: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: dataTypes.DECIMAL,
      allowNull: false,
    },
  };
  let config = {
    tableName: "productos",
    timestamps: false,
  };
  const Producto = sequelize.define(alias, cols, config);
  Producto.associate = function (models) {
    Producto.belongsToMany(models.Usuario, {
      as: "usuario",
      through: "usuariosproductos",
      foreignKey: "id_productos",
      otherKey: "id_usuarios",
      timestamps: false,
    });
  };

  return Producto;
};
