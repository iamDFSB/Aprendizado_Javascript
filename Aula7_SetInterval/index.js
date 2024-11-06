// Função para ser executada
function showTime() {
    return (new Date(1000)).toLocaleTimeString('pt-BR', {
        hour12:false
    });
}

// Executa a função showTime a cada 1 segundo
let num = 0;
let time = setInterval(()=>{
    // console.log(showTime());
    console.log(num);
    num+=1;
}, 1000); // 1000 = 1 segundo

// Força a parada do setInterval
setTimeout(()=>{
    clearInterval(time);
}, 12000);