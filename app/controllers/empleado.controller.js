const db = require("../models");
const Empleado = db.empleados;

// 1. CREAR (POST)
exports.create = (req, res) => {
  const empleado = {
    nombre: req.body.nombre,
    puesto: req.body.puesto,
    salario: req.body.salario
  };

  Empleado.create(empleado)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

// 2. OBTENER TODOS (GET)
exports.findAll = (req, res) => {
  Empleado.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

// 3. ACTUALIZAR (PUT)
exports.update = (req, res) => {
  const id = req.params.id;

  Empleado.update(req.body, { where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Actualizado exitosamente." });
      } else {
        res.send({ message: `No se pudo actualizar el id=${id}.` });
      }
    })
    .catch(err => res.status(500).send({ message: "Error al actualizar." }));
};

// 4. ELIMINAR (DELETE)
exports.delete = (req, res) => {
  const id = req.params.id;

  Empleado.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Eliminado exitosamente." });
      } else {
        res.send({ message: `No se pudo eliminar el id=${id}.` });
      }
    })
    .catch(err => res.status(500).send({ message: "Error al eliminar." }));
};
