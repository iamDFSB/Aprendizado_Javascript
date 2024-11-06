// Serve para retornar um valor único, como por exemplo a soma do total de valores 

const listaNum = [345,62,1,3,4,67,4];

// const total = listaNum.reduce((acumulador, valor)=>{
//     acumulador += valor;
//     return acumulador;
// }, 0);

// console.log(total);


// const result = listaNum.reduce((acc, valor)=>{
//     if (valor % 2 === 0) {
//         acc.push(valor);
//     }
//     return acc;
// }, []);

// console.log(result);


const pessoas = [
    {nome: "Daniel", idade: 23},
    {nome: "Felipe", idade: 73},
    {nome: "Joana", idade: 13},
    {nome: "Leticia", idade: 19},
    {nome: "Lucio", idade: 50}
]

// Pegando o mais velho 
const velho = pessoas.reduce((acc, obj)=>{
    if (acc['idade'] > obj['idade']) return acc
    
    return obj
})

console.log(velho)

