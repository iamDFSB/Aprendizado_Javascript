// Status de uma Promise
/**
  - Pending (Não usou o then e também não usou o await para executar a função)
  - FullFilled (Representação de sucesso que ela foi resolvida)
  - Rejected (Representação de uma Promise que deu errado)
*/


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

// Função onde irá executar as Promises de uma forma mais limpa:
async function playCode() {
    try {
        const frase1 = await waitingAMessage("Frase 1", 1000);
        console.log(frase1);
        
        const frase2 = await waitingAMessage("Frase 2", randomNumber(1, 3));
        console.log(frase2);

        const frase3 = await waitingAMessage("Frase 3", randomNumber(1, 3));
        console.log(frase3);

        console.log("Terminamos tudo");
    } catch(e) {
        console.log(e);
    }
}

playCode();


