//Hola

// 1. Cargar el módulo http
const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

// 2. Crear un servidor

const server = http.createServer((req, res) => {
  console.log("Request received");
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
});

// 3. Escuchar el puerto 3000

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

exports.server = server;
