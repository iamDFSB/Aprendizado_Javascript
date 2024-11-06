// Array
const alunos  = ['Luiz','Maria','João'];

// Adicionando o valor sabendo o tamanho:
// alunos[3] = 'Luana';

console.log(alunos);

// Tamanho da lista:
// alunos.length

// Adicionando item na lista sem saber o tamanho:
alunos.push('Pedro');

// Tirando um item na lista:
alunos.unshift('Lucas');

// Retirando do primeiro index:
let n = alunos.shift();
console.log('Removido no começo: ',n);

// Retirar do final:
let remove_fim = alunos.pop(); 
console.log('Removido no final: ', remove_fim);

// Apagar os index definidos:
delete alunos[1]; // Esse causa uma blanck na lista

console.log(alunos);




// Operação de fatiamento:
let fatia_lista = [1,2,3,4];

console.log(fatia_lista.slice(0,1));

// O array tem como tipo object
console.log(alunos instanceof Array);