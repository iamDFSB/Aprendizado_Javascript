// const date = new Date(2012, 10, 9, 10, 23, 40);
// const date = new Date('2023-10-20T00:00:00');
const data = new Date();
console.log(data.toString()) // Obtendo a data inteira

// Obtendo Dados especificos:

console.log("Dia", data.getDay());
console.log("Mês", data.getMonth());
console.log("Ano", data.getFullYear());
console.log("Hora", data.getHours());
console.log("Minuto", data.getMinutes());
console.log("Segundo", data.getSeconds());
console.log("Milesimo Segundos", data.getMilliseconds());
console.log("Dia da Semana", data.getDay());


let hoje = new Date()
let ontem = new Date(60 * 60 * 24 * 1000)
let valor = hoje - ontem;
let da = new Date(valor);
console.log(da);


