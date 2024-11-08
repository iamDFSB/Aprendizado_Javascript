function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quant){
    this.preco += quant;
}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}

// Formas para definir o prototype na função Camiseta 
// Forma 1:

// Camiseta.prototype = Object.create(Produto.prototype);
// Camiseta.prototype.constructor = Camiseta;

// Forma 2:
Object.setPrototypeOf(Camiseta.prototype, Object.create(Produto.prototype));

const camiseta = new Camiseta('Regata', 7.8, 'Preta');

camiseta.aumento(264);

console.log(camiseta);
