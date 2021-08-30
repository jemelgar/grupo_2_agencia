module.exports = (sequelize, dataTypes) => {
  let alias = "TipoUsuario";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rol: {
      type: dataTypes.STRING,
      allowNull: false,
    },
  };
  let config = {
    tableName: "tipousuarios",
    timestamps: false,
  };
  const TipoUsuario = sequelize.define(alias, cols, config);
  TipoUsuario.associate = function (models) {
    TipoUsuario.hasMany(models.Usuario, {
      as: "usuarios",
      foreignKey: "id_tipo_usuario",
    });
  };

  return TipoUsuario;
};
//TODO checar la relación de esta tabla
