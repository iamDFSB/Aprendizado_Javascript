class Dispositivo{
    constructor(nome){
        this.nome = nome;
        this.ligado = true;
    }

    ligar(){
        if (!this.ligado) { this.ligado = true; }
    }

    desligar(){
        if(this.ligado){ this.ligado = false;}
    }
}


class Phone extends Dispositivo{
    constructor(nome, ...cores){
        super(nome);
        this.cores = cores;
    }
}

// const c1 = new Dispositivo("Celular");
// c1.ligar();
// console.log(c1.ligado);
// c1.desligar();
// console.log(c1.ligado);


const ph = new Phone("Galaxy 30", "Verde", "Vermelho", "Azul");
console.log(ph.cores);
ph.ligar();
console.log(ph.ligado);
ph.desligar();
console.log(ph.ligado);