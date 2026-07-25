module.exports = (sequelize, Sequelize) => {
  const Producto = sequelize.define("producto", {
    nombre: {
      type: Sequelize.STRING
    },
    precio: {
      type: Sequelize.FLOAT
    },
    costo: {
      type: Sequelize.FLOAT
    },
    stock: {
      type: Sequelize.INTEGER
    },
    ingreso: {
      type: Sequelize.DATE
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    }
  });

  return Producto;
};


