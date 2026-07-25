module.exports = app => {
  // 1. Importar el controlador de tutoriales (si ya lo tienes)
  // const tutoriales = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // 2. Definir tus rutas aquí
  // router.post("/", tutoriales.create);
  // router.get("/", tutoriales.findAll);
  // ...

  // 3. Registrar el router en la aplicación principal
  app.use('/api/tutorials', router);
};