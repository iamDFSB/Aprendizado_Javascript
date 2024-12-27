class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    // Método Instancia
    aumentoVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // Metodo estático 
    static trocaPilha(){
        console.log("Trocando");
    }
}


const obj = new ControleRemoto("Samsung");

obj.aumentoVolume();
console.log(obj.volume);
obj.aumentoVolume();
console.log(obj.volume);
obj.diminuirVolume();
console.log(obj.volume);

ControleRemoto.trocaPilha() // Esse método se localiza na parte do constructor quando procurado no prototype
