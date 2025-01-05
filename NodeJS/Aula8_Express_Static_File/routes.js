const express = require('express');
const { paginaInicialGet, paginaInicialPost } = require('./src/controllers/homeController');

const routes = express.Router();

routes.get("/", paginaInicialGet);
routes.post("/", paginaInicialPost);

module.exports = routes;