module.exports = app => {
  const productos = require("../controllers/producto.controller.js");
  var router = require("express").Router();

  // Crear un nuevo producto (POST)
  router.post("/", productos.create);

  // Obtener todos los productos (GET)
  router.get("/", productos.findAll);

  // Definir la ruta base para este endpoint
  app.use('/api/productos', router);
};