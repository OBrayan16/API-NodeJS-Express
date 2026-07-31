const db = require("../models");
const Departamento = db.departamentos;

// 1. CREAR (POST) - Guarda un nuevo departamento en PostgreSQL
exports.create = (req, res) => {
  // Validar la petición
  if (!req.body.nombre) {
    res.status(400).send({ message: "El nombre no puede estar vacío" });
    return;
  }

  // Crear el objeto departamento
  const departamento = {
    nombre: req.body.nombre,
    ubicacion: req.body.ubicacion,
    status: req.body.status ? req.body.status : true
  };

  // Guardar en la base de datos
  Departamento.create(departamento)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ 
      message: err.message || "Ocurrió un error al crear el Departamento." 
    }));
};

// 2. OBTENER TODOS (GET) - Lee todos los departamentos
exports.findAll = (req, res) => {
  Departamento.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ 
      message: err.message || "Ocurrió un error al recuperar los departamentos." 
    }));
};

// 3. ACTUALIZAR (PUT) - Modifica un departamento por su id
exports.update = (req, res) => {
  const id = req.params.id;

  Departamento.update(req.body, { where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Departamento actualizado exitosamente." });
      } else {
        res.send({ message: `No se pudo actualizar el departamento con id=${id}. Tal vez no fue encontrado.` });
      }
    })
    .catch(err => res.status(500).send({ 
      message: "Error al actualizar el departamento con id=" + id 
    }));
};

// 4. ELIMINAR (DELETE) - Borra un departamento por su id
exports.delete = (req, res) => {
  const id = req.params.id;

  Departamento.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Departamento eliminado exitosamente." });
      } else {
        res.send({ message: `No se pudo eliminar el departamento con id=${id}. Tal vez no fue encontrado.` });
      }
    })
    .catch(err => res.status(500).send({ 
      message: "Error al eliminar el departamento con id=" + id 
    }));
};
