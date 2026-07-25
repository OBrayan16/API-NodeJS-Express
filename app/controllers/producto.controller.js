const db = require("../models");
const Producto = db.productos;

// Crear y guardar un nuevo Producto
exports.create = (req, res) => {
  // Validar la petición
  if (!req.body.nombre) {
    res.status(400).send({ message: "El nombre no puede estar vacío" });
    return;
  }

  // Crear el objeto producto
  const producto = {
    nombre: req.body.nombre,
    precio: req.body.precio,
    costo: req.body.costo,
    stock: req.body.stock
  };

  // Guardar en PostgreSQL
  Producto.create(producto)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al crear el Producto."
      });
    });
};

// Obtener todos los Productos
exports.findAll = (req, res) => {
  Producto.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al recuperar los productos."
      });
    });
};

