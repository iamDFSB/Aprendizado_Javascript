// import GeraNumeros, { GeraDigitosEspeciais, GeraLetras } from "./GeraDigitos";
const {GeraNumeros, GeraDigitosEspeciais, GeraLetras} = require("./GeraDigitos");

function mergeListsSequentially(...lists) {
    const result = [];
    let hasElements = true;

    while (hasElements) {
        hasElements = false; // Suponha inicialmente que todas as listas estão vazias

        for (const list of lists) {
            if (list.length > 0) {
                result.push(list.shift()); // Retire o primeiro elemento da lista
                hasElements = true; // Ainda existem elementos nas listas
            }
        }
    }

    return result;
}


export function geradorDeSenha(qtdTotal, dictOfCheckBox) {
    const listKeys = Object.entries(dictOfCheckBox)
                        .filter(([, value]) => value)
                        .map(([key]) => key);

    const listOfLetters = GeraLetras(qtdTotal, listKeys.includes('letraUpper'), listKeys.includes('letraLower'));
    
    const listOfNumbers = GeraNumeros(qtdTotal, listKeys.includes('numeros'));
    
    const listOfSpecialDigit = GeraDigitosEspeciais(qtdTotal, listKeys.includes('specialDigit'));
    
    const mergedList = mergeListsSequentially(listOfLetters, listOfNumbers, listOfSpecialDigit);

    return (mergedList.slice(0, qtdTotal)).join("");
}

