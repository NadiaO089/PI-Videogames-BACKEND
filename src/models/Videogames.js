const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    released: {
      type:DataTypes.DATEONLY
    },
    rating: {
      type: DataTypes.FLOAT
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.TEXT), 
      alowNull: false,
    },
    background_image: {
      type: DataTypes.TEXT,
      defaultValue: 'https://preview.redd.it/8d7f61ikv3s51.jpg?auto=webp&s=c8a8dc1e477ca522b5dc1f4eff4161bbc09719ac'
    }
  }, {timestamps: false});
};

