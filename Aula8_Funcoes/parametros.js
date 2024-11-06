function func (nome) {
    // console.log(arguments[0]);
    // console.log(arguments[1]);
    // console.log(arguments[2]);
    for (const key in arguments) {
        console.log(arguments[key]);
    }
    
}

// func('sfvdw', 'init', 'hbjn');


// Quando não é dado um valor para um parametro, pode-se fazer um valor padrão 

function soma(a,b=3,c=3){
    console.log(a + b + c);
}

// soma(2, undefined, 10)
// soma(2, null, 10)



// Spread e rest in parameters 

function conta(op, ac, ...num) {
    for( let numero of num){
        if(op === '+'){
            ac += numero
        }
    }
    console.log(ac);
}

conta('+', 0, 1,2,3,4)
 