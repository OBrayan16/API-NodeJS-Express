module.exports = (sequelize, Sequelize) => {
  const Proveedor = sequelize.define("proveedor", {
    nombre: { type: Sequelize.STRING },
    empresa: { type: Sequelize.STRING },
    telefono: { type: Sequelize.STRING },
    status: { type: Sequelize.BOOLEAN, defaultValue: true }
  });
  return Proveedor;
};
