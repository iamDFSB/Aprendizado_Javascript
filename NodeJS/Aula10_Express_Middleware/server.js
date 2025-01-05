const express = require('express');
const routes = require('./routes');
const app = express();
const path = require('path');
const myMiddleware = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));

// Meu próprio middleware
app.use(myMiddleware);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(routes);

app.listen(3000, ()=>{
    console.log("Server running: http://localhost:3000");
});