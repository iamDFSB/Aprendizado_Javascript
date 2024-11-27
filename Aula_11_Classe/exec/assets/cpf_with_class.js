// Validação de CPF

// CPF teste:
    // 705.484.450-52
    // 070.987.720-03

// Primeiro Digito: 
    // Multiplicar os 9 primeiros números pela ordem regressiva de 10
    // Soma os resultados = total
    // 11 - (total % 11) = resultado ( Se o resultado for maior que 9 o primeiro digito será 0)

// Segundo Digito:
    // Multiplicar os 10 primeiros números pela ordem regressiva de 11
    // Soma os resultados = total
    // 11 - (total % 11) = resultado ( Se o resultado for maior que 9 o primeiro digito será 0)

class ValidaCPF{
    constructor(cpf, numberBase=10){
        this.cpf = cpf;
        this.numberBase = numberBase;
    }

    createFirstNumber(){
        let listCPF = Array.from(this.cpf.split(".").join(""));
        
        let listaNumbers = listCPF.map((valor, index) => (Number(valor) * (this.numberBase - index)) );
    
        let finalValue = listaNumbers.reduce((acc, valor)=>{
            acc += valor;
            return acc;
        }, 0);
    
        finalValue = 11 - (finalValue % 11);
    
        return (finalValue <= 9) ? finalValue : 0;
    }

    buildEntireCPF(){

        const firstNumber = this.createFirstNumber();
        const olderCPF = this.cpf;

        this.cpf = this.cpf + firstNumber;
        this.numberBase = 11;
        
        const secondNumber = this.createFirstNumber();
        
        // console.log(`Seu cpf é ${olderCPF}-${firstNumber}${secondNumber}`);

        return `${olderCPF}-${firstNumber}${secondNumber}`;
    }

}

// const cpf = "705.484.450";

// const session = new ValidaCPF(cpf);
// session.buildEntireCPF()

// const firstNumber = session.createFirstNumber()

// const otherSession = new ValidaCPF((cpf + firstNumber), 11);

// const secondNumber = otherSession.createFirstNumber()

// console.log(`Seu cpf é ${cpf}-${firstNumber}${secondNumber}`)