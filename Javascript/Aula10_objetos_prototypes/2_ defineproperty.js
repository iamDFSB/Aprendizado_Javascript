// Definir uma só propriedade

// function Produto(nome, preco, estoque){
//     this.nome = nome;
//     this.preco = preco;
    
//     Object.defineProperty(this, 'estoque', {
//         enumerable: true, // Para aparecer no for-loop
//         value: estoque, // Para dar o valor 
//         writable: false, // O valor pode ser alterado ? 
//         configurable: true // Pode apagar a chave ou reconfigurá-la?
//     });
// }

// const p1 = new Produto('Tenis', 20, 3);
// p1.estoque = 23;
// console.log(p1);

// Definindo a propriedades de mais de uma propriedade
function Produto(nome, preco, estoque){
    // this.nome = nome;
    // this.preco = preco;
    
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value : nome,
            writable: true,
            configurable: false
        },
        preco: {
            enumerable: true,
            value : preco,
            writable: true,
            configurable: false
        },
        estoque: {
            enumerable: false,
            value : estoque,
            writable: true,
            configurable: false
        }
    });
}

const p2 = new Produto("Camiseta", 100, 40);

console.log(p2);
console.log(Object.keys(p2));

for (const list of Object.entries(p2)) {
    console.log(list[0], ": ", list[1]);
}