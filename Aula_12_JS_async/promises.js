function randomNumber(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// Callback - Árvore de chamadas:

/*
    function waitingAMessage(msg, rand, callback){
        setTimeout(() => {
            console.log(msg);
            callback();
        }, rand);
    }

    // Para colocar na ordem que queremos
    waitingAMessage("Frase 1", randomNumber(1, 3), () =>{

        waitingAMessage("Frase 2", randomNumber(1, 3), ()=>{

            waitingAMessage("Frase 3", randomNumber(1, 3), ()=>{
                console.log("Acabou");
            });
        });
    });
*/

// Promises - Prometer Ações assincronas quando não temos certeza do tempo de duração:

function waitingAMessage(msg, rand){
    return new Promise((resolve, reject) =>{

        if (typeof msg !== 'string') reject('O tipo que foi entregue está errado.');

        setTimeout(() => {
            resolve(msg);
        }, rand);
    });
}

waitingAMessage("Frase 1", randomNumber(1, 3))
    .then((response) =>{
        console.log(response);
        // return waitingAMessage(233, randomNumber(1, 3)); --> Vai chamar o reject
        return waitingAMessage("Frase 2", randomNumber(1, 3));
    })
    .then((response)=>{
        console.log(response);
        return waitingAMessage("Frase 3", randomNumber(1, 3));
    })
    .then((response)=>{
        console.log(response);
    })
    .catch((e)=>{
        throw new Error(e);
    });

console.log('Executa primeiro que as Promises');
