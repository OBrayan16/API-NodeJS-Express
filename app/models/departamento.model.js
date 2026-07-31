module.exports = (sequelize, Sequelize) => {
  const Departamento = sequelize.define("departamento", {
    nombre: { type: Sequelize.STRING },
    ubicacion: { type: Sequelize.STRING },
    status: { type: Sequelize.BOOLEAN, defaultValue: true }
  });
  return Departamento;
};
