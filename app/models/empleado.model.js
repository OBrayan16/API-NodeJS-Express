module.exports = (sequelize, Sequelize) => {
  const Empleado = sequelize.define("empleado", {
    nombre: { type: Sequelize.STRING },
    puesto: { type: Sequelize.STRING },
    salario: { type: Sequelize.FLOAT },
    status: { type: Sequelize.BOOLEAN, defaultValue: true }
  });
  return Empleado;
};
