const mysql = require("mysql2/promise");
const express = require("express");
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message: "Bienvenido a la API",
  });
});

PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

async function startServer() {
  await new Promise((resolve) => setTimeout(resolve, 8000));

  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  const [rows] = await connection.query("SELECT * from alumnos");

  console.log(JSON.stringify(rows, null, 2));

  await connection.end();
}

startServer();
