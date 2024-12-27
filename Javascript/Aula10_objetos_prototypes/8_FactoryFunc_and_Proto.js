function Pessoa(nome, sobrenome){
    const methods = {
        my_name (){
            return nome;
        },
        my_last_name(){
            return sobrenome;
        }
    }

    return Object.create(methods, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p = Pessoa("Daniel", "Felipe");
console.log(p);
