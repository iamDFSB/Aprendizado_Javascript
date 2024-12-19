// Como exportar variaveis:
// export const nome = 'Daniel';
// export const sobrenome = 'Felipe';
// export const idade = 26;

const nome = 'Daniel';
const sobrenome = 'Felipe';
const idade = 26;

// Só pode um default por arquivo:

// export default function multiplication(x, y) {
//     return x * y;
// }

function multiplication(x, y) {
    return x * y;
}

// export { nome, sobrenome as surname, idade, multiplication };

// Outra forma para colocar o default nas vaariaveis:
export { nome as default, sobrenome, idade, multiplication};

