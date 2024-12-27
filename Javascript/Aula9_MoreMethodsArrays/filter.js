// Filter => Sempre retorna uma lista com o tamanho maior ou menor do que o original. 

// Retorne os números maiores que 10 em uma lista.

// Forma noob:
const listaNum = [345,65,1,3,4,67,4];

let listaBase = [];

const func = num => (num > 10) ? listaBase.push(num) : null;

for (const valor of listaNum) func(valor);

console.log(listaBase);


// Forma mestre:                  (valor, index, array)
const filtrados = listaNum.filter( valor => (valor > 10) );

console.log(filtrados);




// Retorne as pessoas com mais de 50 anos.


const pessoas = [
    {nome: "Daniel", idade: 23},
    {nome: "Felipe", idade: 45},
    {nome: "Luana", idade: 53},
    {nome: "Maria", idade: 78},
    {nome: "José", idade: 90},
];

const pessoasMais50 = pessoas.filter((obj)=> (obj.idade > 50));
const pessoasTerminaComA =  pessoas.filter((obj)=> obj.nome.toLowerCase().endsWith('a'));

console.log(pessoasMais50);
console.log(pessoasTerminaComA);


