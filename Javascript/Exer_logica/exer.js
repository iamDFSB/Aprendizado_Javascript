function get_number(number) {
    if (typeof number !== 'number') return 'Não consigo fazer conta com isso'; 

    let divisionWith3 = number / 3;
    let divisionWith5 = number / 5;

    if (Number.isInteger(divisionWith3) && Number.isInteger(divisionWith5)) return 'FizzBuzz';

    else if (Number.isInteger(divisionWith3) && !Number.isInteger(divisionWith5)) return 'Fizz';

    else if (!Number.isInteger(divisionWith3) && Number.isInteger(divisionWith5)) return 'Buzz';

    return number;

}

// for(let i = 0; i <= 100; i++){
//     console.log(i, get_number(i));
// }

console.log(get_number('a'));
