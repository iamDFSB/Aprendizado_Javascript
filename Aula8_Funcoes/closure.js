function fala(comeco) {
    const final = resto => comeco +" "+ resto; 
    return final
}

const falou = fala("Bom dia");
// console.log(falou("meu amigo"))


function criarMultiplicador(n) {
    return (mult) => {
        return n * mult
    }
}

// console.log(criarMultiplicador(3)(3));

function executeInterval(timeToStart) {
    const timer = setInterval(()=>{
        console.log("Bom dia");
        console.log("MEU TEMPO: ", timeToStart);
    }, timeToStart * 1000)

    return (timeToStop) => {
        setTimeout(()=>{
            console.log("TIME TO STOP: ", timeToStop);
            clearInterval(timer);   
        }, timeToStop * 1000)
    }
}

executeInterval(1)(6)
