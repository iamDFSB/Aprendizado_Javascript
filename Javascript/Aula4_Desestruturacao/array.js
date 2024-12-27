// let lista = ['c','b','a'];
// let a = 'a';
// let b = 'b';
// let c = 'c';

// [a, b, c] = lista
// console.log(a);
// console.log(b);
// console.log(c);

// ...rest

const listaValores = [100,200,300,400];
const [Primeira, Segunda, ...resto] = listaValores;

console.log(Primeira);
console.log(Segunda);
console.log(resto);

// ...spread

listaNova = [
    [1,2,3],
    [10,4,5]
]
listaNova = [...listaNova, resto]

console.log(listaNova);


function printed(valor){
    console.log(valor);
}

printed('oi')