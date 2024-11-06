function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;

    Produto.prototype.desconto = (valor) => {
        return (this.preco - (this.preco * (valor / 100)));
    }
}

const p1 = new Produto("Camiseta", 34);
p1.preco = p1.desconto(10);
console.log(p1);

const p2 = new Produto("Calça", 300);
console.log(p2);
console.log(p2.__proto__);
Object.setPrototypeOf(p2, Produto.prototype);


// Dessa forma já iremos criar o objeto e definir seu prototype
const p3 = Object.create(Produto.prototype);
p3.nome = "Carro";
p3.preco = 1000;
p3.preco = p3.desconto(30);
console.log(p3);








