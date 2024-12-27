class Pessoa{
    constructor(nome){
        this.nome = nome;
        this.id = Symbol();
    }
}

const listObj = [
    (new Pessoa("J1")),
    (new Pessoa("J2")),
    (new Pessoa("J3")),
    (new Pessoa("J1")),
    (new Pessoa("J1")),
    (new Pessoa("J1")),
    (new Pessoa("J4")),
];

const nomePessoa = 'J1';
const filteredList = (listObj.filter( 
    session => (session.nome === nomePessoa)
)).map(session => session.id);

console.log(filteredList);
