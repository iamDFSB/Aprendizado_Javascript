class Carro{
    constructor(nome){
        this.nome = nome;
        let velo = 0;
        // Crio uma variavel privada
        Object.defineProperty(this, 'velocidade', {
            configurable: false,
            enumerable: false,
            get: function (){
                return velo;
            },
            set: function(valor){
                if(typeof valor !== 'number') return;
                if(valor >= 100 || valor <=0) return;
                velo = valor;
            }

        });
    }
}

const c1 = new Carro('Fox');
console.log(c1);
console.log(c1.velocidade);
c1.velocidade = 3;
console.log(c1.velocidade);