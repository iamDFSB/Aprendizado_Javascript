// Uma maneira de copiar objetos de um para outro

const produto = {
    nome: 'Caneca', 
    preco: 1.8
};

const outraCoisa = {
    ...produto,
    material : 'porcelana'
};

outraCoisa.nome = 'Outro nome';

outraCoisa.preco = 2.5;

console.log(produto);
console.log(outraCoisa);


// Retorna qual as configurações da propriedade

const prods = {nome: 'Produto', preco: 12.67};

Object.defineProperty(prods, 'nome', {
    writable: false,
    configurable: false
});

console.log(Object.getOwnPropertyDescriptor(prods, 'nome')); // { value: 'Produto', writable: false, enumerable: true, configurable: false}

// Valores

console.log(Object.values(prods)); // [ 'Produto', 12.67 ]

// Chaves e Valores

console.log(Object.entries(prods)); // [ [ 'nome', 'Produto' ], [ 'preco', 12.67 ] ]

// Monstrar todo o dicionário e adiciona outros dicionários

console.log(Object.assign(prods, {nomy: "Oi"})); // { nome: 'Produto', preco: 12.67, nomy: 'Oi' }