const data = new Date();
const diaSemadaEmNumero = data.getDay();

let diaDaSemana;

switch (diaSemadaEmNumero){
    case 0:
        diaDaSemana = 'Domingo';
        break;
    case 1:
        diaDaSemana = 'Segunda';
        break;
    case 2:
        diaDaSemana = 'Terça';
        break;
    case 3:
        diaDaSemana = 'Quarta';
        break;
    case 4:
        diaDaSemana = 'Quinta';
        break;
    case 5:
        diaDaSemana = 'Sexta';
        break;
    case 6:
        diaDaSemana = 'Sábado';
        break;
    default:
        console.log('Não existe esse valor');
}   

console.log(diaDaSemana);