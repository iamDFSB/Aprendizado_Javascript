const pessoa = {
    nome:"Daniel",
    sobrenome: "Felipe"
}

console.log(pessoa.nome);
console.log(pessoa.sobrenome);

// Construtor de Objeto:
const p1 = new Object();

p1.nome = "Lucas";
p1.sobrenome = "Fias";

console.log(p1);

delete p1.sobrenome
console.log('Tirei o sorenome: ');
console.log(p1);
