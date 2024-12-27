class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get_nome(){
        return this.nome
    }
    set_nome(valor){
        this.nome = valor;
    }
}

const p1 = new Pessoa("Daniel", "Felipe");

console.log(p1);