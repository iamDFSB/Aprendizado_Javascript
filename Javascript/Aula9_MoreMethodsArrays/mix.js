const lista = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Retornar a soma do dobro de todos os pares

const numeroPares = lista.filter( valor => (valor % 2 === 0));

const dobrarValores = numeroPares.map( valor => valor * 2);

const somarTudo = dobrarValores.reduce((acc, valor)=>{
    return acc += valor
}, 0);

console.log(numeroPares);
console.log(dobrarValores);
console.log(somarTudo);
