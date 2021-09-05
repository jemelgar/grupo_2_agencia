module.exports = (sequelize, dataTypes) => {
  let alias = "Usuario";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    id_tipo_usuario: {
      type: dataTypes.INTEGER,
    },
  };
  let config = {
    tableName: "usuarios",
    timestamps: false,
  };
  const Usuario = sequelize.define(alias, cols, config);
  Usuario.associate = function (models) {
    Usuario.belongsTo(models.TipoUsuario, {
      as: "tipoUsuario",
      foreignKey: "id_tipo_usuario",
    });

    Usuario.belongsToMany(models.Producto, {
      as: "producto",
      through: "usuariosproductos",
      foreignKey: "id_usuarios",
      otherKey: "id_productos",
      timestamps: false,
    });
  };

  return Usuario;
};
