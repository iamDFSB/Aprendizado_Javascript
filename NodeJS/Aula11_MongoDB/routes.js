const express = require('express');
const { paginaInicialGet, paginaInicialPost } = require('./src/controllers/homeController');
const { paginaInicialContatoGet, paginaInicialContatoPost } = require('./src/controllers/contatoController');

const routes = express.Router();

//// Uma forma de fazer o Middleware
// function myMiddleware(req, res, next) {
//     req.session = {nome: 'Daniel', sobrenome: 'Felipe'};
//     console.log("\nPassei no seu middleware.\n");
//     next();
// }

// routes.get("/", myMiddleware, paginaInicialGet, function (req, res, next) {
//     console.log("\nTerminou o loading\n");
//     console.log("Achei a session: ", req.session);
// });


routes.get("/", paginaInicialGet);
routes.post("/", paginaInicialPost);

routes.get("/contato", paginaInicialContatoGet);
routes.post("/contato", paginaInicialContatoPost);

module.exports = routes;