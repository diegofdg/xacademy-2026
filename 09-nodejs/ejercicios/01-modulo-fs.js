console.log("Hello World");

const fs = require("fs");

fs.readFile("archivo1.txt", "utf-8", (err, data) => {
  if (err) throw err;

  fs.writeFile("archivo2.txt", data + " con información agregada", (err) => {
    if (err) throw err;

    console.log("El archivo ha sido guardado");
  });
});

fs.mkdir("results", (err) => {
  if (err) throw err;
});
