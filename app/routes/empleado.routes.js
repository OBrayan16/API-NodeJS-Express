module.exports = app => {
  const empleados = require("../controllers/empleado.controller.js");
  var router = require("express").Router();

  router.post("/", empleados.create);       // Crear
  router.get("/", empleados.findAll);       // Leer todos
  router.put("/:id", empleados.update);     // Actualizar por ID
  router.delete("/:id", empleados.delete);  // Eliminar por ID

  app.use('/api/empleados', router);
};
