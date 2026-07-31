// Importamos los módulos
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Configuramos CORS para permitir peticiones de nuestro frontend (ej. en el puerto 8081)
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// Parse requests of content-type - application/json
app.use(bodyParser.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Sincronización con la base de datos usando Sequelize
const db = require("./app/models");
db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// Ruta simple de prueba
app.get("/", (req, res) => {
  res.json({ message: "UMG Web Application" });
});

// Importación de rutas (Corregido el error de tipeo)
require("./app/routes/tutorial.routes")(app);
require("./app/routes/cliente.routes")(app);
// Agrega esta línea junto a las rutas de clientes
require("./app/routes/producto.routes")(app);
require("./app/routes/empleado.routes")(app);
require("./app/routes/proveedor.routes")(app);
require("./app/routes/departamento.routes")(app);

// Configuramos un puerto distinto para el backend (8080)
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
