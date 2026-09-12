console.log("Este es nuestro primer servidor");

const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    console.log(`Req URL: ${req.url}`);

    if (req.url === "/hello") {
      res.write("<h1>Hello World</h1>");
      res.write("<h2>Bienvenidos a mi sitio web</h2>");
    } else {
      res.write("<h1>Este es mi servidor</h1>");
    }
    res.end();
  })
  .listen(8080);
