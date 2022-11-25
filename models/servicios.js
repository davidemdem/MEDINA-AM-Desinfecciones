'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class servicios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  servicios.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'servicios',
  });
  return servicios;
};