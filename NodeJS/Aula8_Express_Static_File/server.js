const express = require('express');
const routes = require('./routes');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public'))); // Quando criar arquivos nesta pasta ela irá ser acessivel no link acessando http://localhost:3000/teste.txt

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(routes);

app.listen(3000, ()=>{
    console.log("Server running: http://localhost:3000");
});