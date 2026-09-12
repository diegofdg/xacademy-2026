const express = require("express");
const PORT = "8080";

const app = express();
app.use(express.json());

const myMdw = (req, res, next) => {
  console.log(`Req URL: ${req.url}`);
  res.setHeader("Content-Type", "Application/json");
  next();
};

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send("<h1>Este es nuestro servidor</h1>");
});

app.get("/hello", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send("<h1>Hello World</h1> <h2>Bienvenidos a mi sitio web</h2>");
});

app.get("/user/:userId", myMdw, (req, res) => {
  const userId = req.params.userId;
  res.send({ userId });
});

app.use(myMdw);

app.get("/user", (req, res) => {
  const name = req.query.name;
  res.send({ name });
});

app.post("/user", (req, res) => {
  const { name, email, password } = req.body;
  res.send({ name, email, password: "***" });
});

app.put("/user/:userId", (req, res) => {
  const userId = req.params.userId;
  const { name, email, password } = req.body;
  res.send({ id: userId, name, email, password: "***" });
});

app.delete("/user/:userId", (req, res) => {
  const userId = req.params.userId;
  res.send(`Adiós usuario ${userId}`);
});

app.listen(PORT, () => {
  console.log(`Escuchando peticiones en el puerto ${PORT}`);
});
