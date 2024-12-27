const pessoa = {
    nome:'Daniel',
    idade:23,
    sobrenome:'Felipe',
    endereco: {
        rua: 'Anelar',
        numero: 2345
    }
}

// Pode colocar um valor por padrão, caso não existir no objeto:
const { nome='Não tem', endereco ,...res} = pessoa

// Posso colocar outro nome para me referir a variavel do objeto:
//const { nome: n, endereco ,...res} = pessoa

// Consigo também navegar entre as camadas do objeto, para pegar o calor desejado:
//const { endereco: {rua, numero} } = pessoa

console.log(res);
