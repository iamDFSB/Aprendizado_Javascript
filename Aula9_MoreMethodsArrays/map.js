// Dobre os números

const numeros = [34, 56, 234, 2, 4, 65, 64, 5, 356];

// Importante o map retorna o valor mesmo, não um bool.
const numerosEmDobro = numeros.map(valor => valor * 2);

// console.log(numerosEmDobro);


const pessoas = [
    {nome: "Daniel", idade: 23},
    {nome: "Felipe", idade: 45},
    {nome: "Luana", idade: 53},
    {nome: "Maria", idade: 78},
    {nome: "José", idade: 90},
];

const nomesOnly = pessoas.map( obj => obj.nome);

console.log(nomesOnly);

const idades = pessoas.map( obj => ({idade: obj.idade}) );

console.log(idades);

const createIDToPessoas = pessoas.map( (obj, index) => ({ id: index + 1, ...obj }) );

// console.log(pessoas);
console.log(createIDToPessoas);



