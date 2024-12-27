function hello() {
    console.log('hello')
}

// Function Expression
const meu_dado = function (){
    hello()
}

meu_dado()

// Arrow function
const funcArrow = () =>{
    console.log("Arrow funciton");
}

funcArrow()


// On object
const obj = {
    falar : () => {
        console.log("Estou falando");
    }
}

obj.falar()