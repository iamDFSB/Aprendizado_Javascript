function Produto (nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let privateEstoque = estoque;
    
    // Forma de criar Get/Set em funções construtoras
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function (){
            return privateEstoque;
        },
        set: function (valor){
            if (typeof valor === "number"){ 
                console.log(`Estoque foi alterado para: ${valor} unit.`);
                privateEstoque = valor;
            }
            else{
                throw new TypeError("O valor no qual você inseriu, não é do tipo 'number'");
            }
        }
    });
}

const p1 = new Produto("Calça Vermelha", 40, 90);
p1.estoque = 21;
console.log(p1);
