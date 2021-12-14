const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('characters', {
    id: {
      type: DataTypes.UUID, // Crea una columna de tipo UUID
      defaultValue: DataTypes.UUIDV4, // Crea un valor por defecto
      primaryKey: true, // Crea una columna de tipo primaria
      allowNull: false // No permite valores nulos
    },
    name: {
      type: DataTypes.STRING, // Crea una columna de tipo string
      allowNull: false // No permite valores nulos
    },
    status: {
      type: DataTypes.STRING // Crea una columna de tipo string
    },
    species: {
      type: DataTypes.STRING // Crea una columna de tipo string
    },
    image: {
      type: DataTypes.STRING // Crea una columna de tipo string
    }
  });
};


