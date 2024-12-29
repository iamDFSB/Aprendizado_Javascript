// mod1
// const { falaNome, Pessoa, ...rest } = require('./mod1.js');
// const axios = require ("axios");
// console.log(falaNome());
// console.log(Pessoa);


const Cachorro = require('./B/C/D/mod2');

// Importando a minha classe de um arquivo muito longe
(new Cachorro('Josh')).latir();

// caminhos da pasta pai e do arquivo em que estamos.
// console.log(__dirname);
// console.log(__filename);

// Aplicando a biblioteca path:
const path = require('path');

console.log(path.resolve(__dirname, '..', '..'));
