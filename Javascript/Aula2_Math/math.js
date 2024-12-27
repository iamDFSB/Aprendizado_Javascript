let num = 1.49
// Arredonda o número para cima:
console.log("Para cima: ", Math.ceil(num));
// Arredonda para baixo:
console.log("Para baixo: ", Math.floor(num));
// Arredonda também:
console.log("Arredonda: ", Math.round(num));

// Achar o máximo:
console.log("O Maior: ", Math.max(1,2,76,45,89,67,3,4));

// Acha o menor:
console.log("O Menor: ", Math.min(10,2,76,45,89,67,3,4));

// Gerar números aleátorios: Mas é um numero random entre 0 - 1 só que o 1 não é incluído
let rand = Math.random() * 4 + 2;
console.log(Math.round(rand));

// Valor de PI
console.log(Math.PI);

let raiz = 8 ** 0.5
console.log(raiz);
console.log(Math.sqrt(8));

// Se Dividir um número por 0 ele vira um Infinity
console.log( 10 / 0);