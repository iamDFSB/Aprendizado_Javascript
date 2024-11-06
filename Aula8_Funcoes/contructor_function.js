function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;

    this.metodo = function (){
        console.log("Sou um metodo");
    }
}

const p1 = new Pessoa("Daniel", 23);
console.log(p1);
console.log(p1.nome);
console.log(p1.idade);
p1.metodo();