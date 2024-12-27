function* geradora1() {
    yield "Valor 1";
    yield "Valor 2";
    yield "Valor 3";
}

const g1 = geradora1();

// for (let valor of g1) {
//     console.log(valor);
// }

// Delegando tarefas para outras funções:

function* geradora2() {
    yield 1;
    yield 2;
    yield 3;
}

function* geradora3() {
    yield* geradora2();
    yield 4;
    yield 5;
    yield 6;
}

const obj = geradora3();

// for (const valor of obj) {
//     console.log(valor);
// }


// Geradora para outras funções:

function* executora(){
    yield function (){
        console.log("Filho do yield 1");
    }
    yield 2;

    yield function(){
        console.log("Filho do yield 3");
    }
}

for (const valor of executora()) {
    if (typeof valor === "function"){
        valor();
    }else{
        console.log(valor);
    }
}