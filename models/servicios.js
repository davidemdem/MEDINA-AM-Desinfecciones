module.exports = (sequelize, Sequelize) => {
  const servicios = sequelize.define("servicios", {
    nombre: {
      type: Sequelize.STRING,
    },
    descripcion: {
      type: Sequelize.STRING,
    },
    precio: {
      type: Sequelize.STRING,
    },
  });
  
  return servicios;
};

