module.exports = app => {
  const proveedores = require("../controllers/proveedor.controller.js");
  var router = require("express").Router();

  // Crear un nuevo proveedor (POST)
  router.post("/", proveedores.create);

  // Obtener todos los proveedores (GET)
  router.get("/", proveedores.findAll);

  // Actualizar un proveedor por su id (PUT)
  router.put("/:id", proveedores.update);

  // Eliminar un proveedor por su id (DELETE)
  router.delete("/:id", proveedores.delete);

  // Definir la ruta base para este endpoint
  app.use('/api/proveedores', router);
};
