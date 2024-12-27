import ValidaCPF from "./ValidaCPF";

export default class GeraCPF {
    constructor(){}
    randomNumber (min=100000000, max=999999999) {
        return String(Math.floor(Math.random() * (max - min) + min))
    }

    geraNovoCPF() {
        const cpfSemDigito = this.randomNumber();
        const validaCpf = new ValidaCPF(cpfSemDigito);
        return validaCpf.buildEntireCPF();
    }
}
