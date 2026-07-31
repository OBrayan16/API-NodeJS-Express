module.exports = app => {
  const departamentos = require("../controllers/departamento.controller.js");
  var router = require("express").Router();

  // Crear un nuevo departamento (POST)
  router.post("/", departamentos.create);

  // Obtener todos los departamentos (GET)
  router.get("/", departamentos.findAll);

  // Actualizar un departamento por su id (PUT)
  router.put("/:id", departamentos.update);

  // Eliminar un departamento por su id (DELETE)
  router.delete("/:id", departamentos.delete);

  // Definir la ruta base para este endpoint
  app.use('/api/departamentos', router);
};
