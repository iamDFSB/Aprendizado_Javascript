export function GeraNumeros(qtdNum, isNumber) {
    if (isNumber) {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        const listOfNumbers = [];
        for (let i = 0; i < qtdNum; i++) {
            listOfNumbers.push(numbers[Math.floor(Math.random() * numbers.length)]);
        }
        return listOfNumbers; 
    }else {
        return [];
    }
}

export function GeraLetras(qtdNum, isUpper, isLower) {
    const alphabetUpper = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    const alphabetLower = alphabetUpper.map(letter => letter.toLowerCase());

    const listOfLetters = [];
    if (isUpper && isLower) {        
        for (let i = 0; i < qtdNum; i+=2) {
            listOfLetters.push(alphabetUpper[Math.floor(Math.random() * alphabetUpper.length)]);
            listOfLetters.push(alphabetLower[Math.floor(Math.random() * alphabetUpper.length)]);
        }
    }
    else if (isLower){
        for (let i = 0; i < qtdNum; i++) {
            listOfLetters.push(alphabetLower[Math.floor(Math.random() * alphabetUpper.length)]);
        }
    } 
    else if (isUpper){
        for (let i = 0; i < qtdNum; i++) {
            listOfLetters.push(alphabetUpper[Math.floor(Math.random() * alphabetUpper.length)]);
        }
    }
    else {
        return [];
    }
    return listOfLetters; 
}


export function GeraDigitosEspeciais(qtdDigits, isSpecialDigit) {
    if (isSpecialDigit) {        
        const listDigits = ['^', '~', '|', '=', '+', '-', '*', '%', '#', '&', '$', '@'];
        const listToReturn = [];
        for (let i = 0; i < qtdDigits; i++) {
            listToReturn.push(listDigits[Math.floor(Math.random() * listDigits.length)]);
        }
        return listToReturn;
    }else {
        return [];
    }
}