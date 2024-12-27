const _velocidade= [Symbol('velocidade')];

class Carro{
    constructor(nome){
        this.nome = nome;
        this._velocidade = 0;
    }

    get velocidade() {
        return this._velocidade;
    }

    set velocidade(valor){
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this._velocidade = valor;
    }

    acelerar(){
        if(this._velocidade >= 100) return;
        this._velocidade++;
        return true;
    }

    freiar(){
        if(this._velocidade <= 0) return;
        this._velocidade--;
        return true;
    }
}

const c1 = new Carro('Fusca');
console.log(c1)
console.log(c1._velocidade);
c1.velocidade = 10;
console.log(c1.velocidade);

// for (let index = 0; index <= 1; index++) {
//     c1.acelerar();
//     console.log(c1._velocidade);
// }