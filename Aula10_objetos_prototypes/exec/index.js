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


function FindNumber(cpf, numberBase) {
    this.cpf = cpf;
    this.numberBase = numberBase;

    FindNumber.prototype.createNumber = function () {
        // "/\D+/g" -> Isso significa tudo que não for número
        // this.cpf.replace(/\D+/g, "");

        let listCPF = Array.from(this.cpf.split(".").join(""));
        
        let listaNumbers = listCPF.map((valor, index) => (Number(valor) * (this.numberBase - index)) );
    
        let finalValue = listaNumbers.reduce((acc, valor)=>{
            acc += valor;
            return acc;
        }, 0);
    
        finalValue = 11 - (finalValue % 11);
    
        return (finalValue <= 9) ? finalValue : 0;
    
    }
}

const cpf = "070.987.720";

const session = new FindNumber(cpf, 10);

const firstNumber = session.createNumber()

const otherSession = new FindNumber((cpf + firstNumber), 11);

const secondNumber = otherSession.createNumber()

console.log(`Seu cpf é ${cpf}-${firstNumber}${secondNumber}`)


