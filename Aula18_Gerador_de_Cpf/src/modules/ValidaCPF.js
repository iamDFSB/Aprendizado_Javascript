export default class ValidaCPF {
    constructor(cpf, numberBase=10){
        this.cpf = cpf;
        this.numberBase = numberBase;
    }

    createFirstNumber(){
        let listCPF = Array.from(String(this.cpf).split(".").join(""));
        
        let listaNumbers = listCPF.map((valor, index) => (Number(valor) * (this.numberBase - index)) );
    
        let finalValue = listaNumbers.reduce((acc, valor) => {
            acc += valor;
            return acc;
        }, 0);
    
        finalValue = 11 - (finalValue % 11);
    
        return (finalValue <= 9) ? finalValue : 0;
    }

    buildEntireCPF(){

        const firstNumber = this.createFirstNumber();

        this.cpf = this.cpf + firstNumber;
        this.numberBase = 11;
        
        const secondNumber = this.createFirstNumber();
        
        const array = Array.from(this.cpf);
        const olderCPF = `${array.slice(0, 3).join("")}.${array.slice(3, 6).join("")}.${array.slice(6, 9).join("")}`;
        
        return `${olderCPF}-${firstNumber}${secondNumber}`;
    }

}
