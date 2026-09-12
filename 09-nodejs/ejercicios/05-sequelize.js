const express = require("express");
const { initDb } = require("./db/db");
const PORT = "8080";
const User = require("./db/models/user.model");

const app = express();
app.use(express.json());

app.get("/user", async (req, res) => {
  const { nombre } = req.query;
  const user = await User.findAll({ where: { nombre } });
  res.status(200).json(user);
});

app.post("/user", async (req, res) => {
  const { nombre, apellido, email } = req.body;
  try {
    const newUser = await User.create({
      nombre,
      apellido,
      email,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/user/:userId", async (req, res) => {
  const { userId } = req.params;
  const user = await User.findByPk(userId)
    .then((user) => {
      if (!user) {
        throw new Error("Usuario no encontrado");
      }
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(404).send(error.message);
    });
});

app.put("/user/:userId", async (req, res) => {
  const { userId } = req.params;
  const { nombre, apellido, email } = req.body;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    const updated = await User.update(
      { nombre, apellido, email },
      { where: { id: userId } },
    );
    res.status(201).json(updated);
  } catch (error) {
    res
      .status(error.message === "Usuario no encontrado" ? 404 : 500)
      .send(error.message);
  }
});

app.delete("/user/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    await User.destroy({ where: { id: userId } });
    res.status(201).send(`El usuario ${user.nombre} fue eliminado`);
  } catch (error) {
    res
      .status(error.message === "Usuario no encontrado" ? 404 : 500)
      .send(error.message);
  }
});

app.listen(PORT, async () => {
  await initDb();
  console.log(`Escuchando peticiones en el puerto ${PORT}`);
});
