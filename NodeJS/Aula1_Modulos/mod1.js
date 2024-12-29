const nome = 'Daniel';
const sobrenome = 'Felipe';

const falaNome = () => {
    return nome + " " +  sobrenome;
}

class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
    verNome(){
        return this.nome;
    }
}


// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// Mesma coisa: ↓

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
exports.Pessoa = Pessoa;
this.qualquerCoisa = 'qualquer';

// module.exports = {
//     nome: 'Daniel'
// }
