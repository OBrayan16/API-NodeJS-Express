const db = require("../models");
const Proveedor = db.proveedores;

// 1. CREAR (POST)
exports.create = (req, res) => {
  const proveedor = {
    nombre: req.body.nombre,
    empresa: req.body.empresa,
    telefono: req.body.telefono
  };

  Proveedor.create(proveedor)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message || "Error al crear el Proveedor." }));
};

// 2. OBTENER TODOS (GET)
exports.findAll = (req, res) => {
  Proveedor.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message || "Error al recuperar los proveedores." }));
};

// 3. ACTUALIZAR (PUT)
exports.update = (req, res) => {
  const id = req.params.id;

  Proveedor.update(req.body, { where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Proveedor actualizado exitosamente." });
      } else {
        res.send({ message: `No se pudo actualizar el Proveedor con id=${id}.` });
      }
    })
    .catch(err => res.status(500).send({ message: "Error al actualizar el Proveedor." }));
};

// 4. ELIMINAR (DELETE)
exports.delete = (req, res) => {
  const id = req.params.id;

  Proveedor.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Proveedor eliminado exitosamente." });
      } else {
        res.send({ message: `No se pudo eliminar el Proveedor con id=${id}.` });
      }
    })
    .catch(err => res.status(500).send({ message: "Error al eliminar el Proveedor." }));
};
