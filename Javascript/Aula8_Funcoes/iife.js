// IIFE -> Emmediately invoked function expression

const qualquerCoisa = (() => {
    console.log(111222344);
})()

qualquerCoisa;


(function (nome){
    function callName(sobrenome) {
        return nome + " " + sobrenome
    }

    console.log("Meu novo nome é: ", callName('Fernandez'));
})('Daniel');

