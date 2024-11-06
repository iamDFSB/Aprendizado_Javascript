
const treHoras = 60 * 60 * 3 * 1000;

// 01/01/1970 Time unix ou época unix:
// const data = new Date(0+treHoras);

// Milésimos de segundo vai até 999

// Mês começa do 0-11

// Forma para criar data 
// 1º
// const data = new Date(2018, 8, 3, 15, 24, 12); //ano, mes, dia, hora, min, seg, milesimo

// 2º
const data = new Date("2014-7-12 23:6:12"); 


console.log("Dia", data.getDate());
console.log("Mes", data.getMonth() + 1);
console.log("Ano", data.getFullYear());
console.log("Hora", data.getHours());
console.log("Min", data.getMinutes());
console.log("Seg", data.getSeconds());
console.log("Milesegunds", data.getMilliseconds());
console.log("Dia semana", data.getDay());
console.log("Data completa", data.toString());
console.log("Milesimo da data atual", Date.now());


// Criar função para formatar data
function colocaZero(num) {
    return num >= 10 ? num:`0${num}` ;
    // return element
}


function formatDate(data) {
    const dia = data.getDate();    
    const mes = data.getMonth() + 1;    
    const ano = data.getFullYear();
    
    return `${colocaZero(ano)}/${colocaZero(mes)}/${colocaZero(dia)}`
}

console.log(formatDate(data))
