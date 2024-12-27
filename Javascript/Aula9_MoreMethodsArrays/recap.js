const lista = ["Daniel", "Felipe", "Lucas"];

const lu = [...lista];

lu.pop();
lu.shift();
console.log(lu);
console.log(lista);


// Fatia a minha lista:
console.log(lista.slice(1));

// Cria uma lista a partir de uma string:
const nome = "Daniel Felipe Satana "
let listaDeNomes = nome.split(" "); 

console.log(listaDeNomes); // [ 'Daniel', 'Felipe', 'Satana' ]

// Transformar em lista de novo:

const stringNome = listaDeNomes.join(" ");
console.log(stringNome);






