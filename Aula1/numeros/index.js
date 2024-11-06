let num = 1;
let num2 = 2.349033;

console.log(num.toString() + num2); // Ele faz a concatenação dos dois valores
console.log(num); // Continua sendo o valor number

console.log(num.toString(2)); // Representação de forma binária do valor

console.log(num2.toFixed(3)); // Arredondamento do number


console.log(Number.isInteger(num2)); // Verifica se o number é int

result = 12 * 'Olá';

console.log(Number.isNaN(result)); // Verifica se o resultado da conta deu errado retornando NaN para ele.

num = 0.7;
num2 = 0.1;
console.log(
    Number.parseFloat((num+num2).toFixed(1))
);