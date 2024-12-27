const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let certainTime;

function generateTime(segundos) {
    let time = (new Date(segundos * 1000)).toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
    return time;
}

function InitialCLock() {
    certainTime = setInterval(() => {
        relogio.textContent = generateTime(segundos);
        segundos++;
    }, 1000);
}


document.addEventListener('click', (e) => {
    const element = e.target;

    switch (element.className) {

        case 'iniciar':
            clearInterval(certainTime);
            InitialCLock();
            relogio.style.color = 'black';
            break;

        case 'pausar':
            clearInterval(certainTime);
            relogio.style.color = 'red';
            break;

        case 'zerar':
            clearInterval(certainTime);
            relogio.textContent = '00:00:00';
            relogio.style.color = 'black';
            segundos = 0;
            break;

        default:
            console.log('Essa variavel não existe');
            break;
    }
})

