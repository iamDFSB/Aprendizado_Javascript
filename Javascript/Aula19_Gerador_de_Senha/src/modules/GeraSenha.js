import {GeraNumeros, GeraDigitosEspeciais, GeraLetras} from "./GeraDigitos.js";

export function geradorDeSenha(qtdTotal, dictOfCheckBox) {
    const listKeys = Object.entries(dictOfCheckBox)
                        .filter(([, value]) => value)
                        .map(([key]) => key);

    const listOfLetters = GeraLetras(qtdTotal, listKeys.includes('letraUpper'), listKeys.includes('letraLower'));
    
    const listOfNumbers = GeraNumeros(qtdTotal, listKeys.includes('numeros'));
    
    const listOfSpecialDigit = GeraDigitosEspeciais(qtdTotal, listKeys.includes('specialDigit'));
    
    const result = [];
    
    for (let i = 0; i < qtdTotal; i++) {
        result.push(listOfLetters.shift());
        result.push(listOfNumbers.shift());
        result.push(listOfSpecialDigit.shift());
    }

    return result.join("").slice(0, qtdTotal);

}

const func = () => Math.floor(Math.random() * (max - min) + min)