function randomNumber(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function waitingAMessage(msg, rand){
    return new Promise((resolve, reject) =>{
        if (typeof msg !== 'string') {
            reject('O tipo que foi entregue está errado.');
        }
        else {
            setTimeout(() => {
                resolve(msg);
                
            }, rand);
        }
    });
}

const promises = [
    waitingAMessage('Promise 1', randomNumber(1, 5)),
    waitingAMessage('Promise 2', randomNumber(1, 5)),
    waitingAMessage('Promise 3', randomNumber(1, 5)),
]

// Promise.all -> Todos precisam dar certo para retornar o objeto:
/*
    Promise.all(promises)
        .then((valor)=>{
            console.log(valor);
        })
        .catch((e)=>{
            throw new Error(e);
        })
*/

// Promise.race -> É uma corrida para ver quem termina primeiro a promise:

/*
    Promise.race(promises)
        .then((valor)=>{
            console.log(valor + " - Essa foi a Promise mais rápida");
        })
        .catch((e)=>{
            throw new Error(e);
        })
*/

// Promise.resolve -> Resolve o processo mais rápido, 
// pois já existe uma resposta guardada e não precisa executar a função:

/*
    function downloadPage() {
        const cache = true;
        if (cache) {
            return Promise.resolve('Está no cache');
        } else {
            return waitingAMessage('Página baixada', randomNumber(1, 3))
        }
    }

    downloadPage()
        .then((response) => {
            console.log(response);
        })
        .catch((e)=>{
            console.log(e);
        });
*/

// Promise.reject -> serve para bloquear o processo e ir direto para o catch:

function downloadPage() {
    const cache = true;
    if (cache) {
        return Promise.reject('Está no cache');
    } else {
        return waitingAMessage('Página baixada', randomNumber(1, 3))
    }
}


downloadPage()
    .then((response) => {
        console.log(response);
    })
    .catch((e)=>{
        throw new Error(e);
    });

