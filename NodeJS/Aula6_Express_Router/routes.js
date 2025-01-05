const express = require('express');
const routes = express.Router();

const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');

// Cada route chama um controller
routes.get('/', homeController.paginaInicialGet);
routes.post('/', homeController.paginaInicialPost);

// Pagina de Contato
routes.get('/contato', contatoController.paginaInicialGet);
routes.post('/contato', contatoController.paginaInicialPost);

module.exports = routes;