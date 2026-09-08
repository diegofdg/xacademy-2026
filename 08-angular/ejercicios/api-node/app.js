import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

const features = [
  {
    id: 1,
    titulo: "xacademy",
    texto:
      "xAcademy es un programa de formación en tecnología llevado adelante por la Fundación Tecnología con Propósito junto a Santex que busca promover un cambio positivo en la          comunidad a través de la educación en IT, apuntando a lograr la inserción laboral de personas en el mundo tecnológico.",
    imagen: "img/xacademy-01-600x400.jpg",
    logo: "img/xacademy.svg",
    posicionImagen: "left",
  },
  {
    id: 2,
    titulo: "Robótica educativa: la tecnología del futuro",
    texto:
      "Durante el curso, los alumnos y alumnas a través de la robótica desarrollan la curiosidad, el autodidactismo y las habilidades blandas necesarias para afrontar la revolución tecnológica del siglo XXI.",
    imagen: "img/robotica-educativa-07-600x400.jpg",
    logo: null,
    posicionImagen: "right",
  },
];

app.get("/features", (req, res, next) => {
  res.json(features);
});

app.post("/features", (req, res, next) => {
  features.push(req.body);
  res.send({ message: "POST request to the homepage" });
});

app.put("/features/:id", (req, res, next) => {
  const index = features.findIndex((f) => f.id === parseInt(req.params.id));
  features[index] = req.body;
  console.log("Updated", features[index]);
  res.send({ message: "PUT request succesfull" });
});

app.delete("/features/:id", (req, res, next) => {
  const index = features.findIndex((f) => f.id === parseInt(req.params.id));
  const deleteFeature = features.splice(index, 1);
  console.log(deleteFeature);
  res.send({ message: "Deleted correctly" });
});

app.listen(3000, () => {
  console.log("Server running in port 3000");
});
