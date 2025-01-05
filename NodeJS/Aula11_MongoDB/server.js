require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const app = express();

const mongoose = require('mongoose');

// Conectando com o MongoDB para depois serve mostrado nosso site.
mongoose.connect(process.env.CONNECTION_STRING)
    .then(()=> {
        console.log("Está conectando...");
        app.emit('pronto');
    })
    .catch((e)=>{
        console.log("Ocorreu um erro na conexão do Mongo DB");
        console.log(e);
    })

const path = require('path');
const myMiddleware = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));

// Meu próprio middleware
app.use(myMiddleware);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, ()=>{
        console.log("Server running: http://localhost:3000");
    });
});
