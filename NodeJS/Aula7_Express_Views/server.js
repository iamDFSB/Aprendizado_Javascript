const express = require('express');
const routes = require('./routes');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: true}));
app.set('views', path.resolve(__dirname, 'src', 'views')); // Informando o path para dizer onde estará as nossas views
app.set('view engine', 'ejs'); // Informando a engine que iremos usar
app.use(routes);

app.listen(3000, ()=>{
    console.log("Server running: http://localhost:3000");
});