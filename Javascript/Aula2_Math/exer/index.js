let valor = Number(prompt("Responda"));
const divConteudo = document.querySelector("div.conteudo");

function criarElemento(nome_element, valor) {
    const tag = document.createElement(nome_element); 
    tag.textContent = valor;
    divConteudo.appendChild(tag);
}

const dicio = [
    ['h3',`Seu número é ${valor}`],
    ['p',`Raiz Quadrada ${Math.sqrt(valor)}`],
    ['p',`${valor} é um inteiro: ${Number.isInteger(valor)}`],
    ['p',`É NaN: ${Number.isNaN(valor)}`],
    ['p',`Arredondando para baixo: ${Math.floor(valor)}`],
    ['p',`Arredondando para cima: ${Math.ceil(valor)}`],
    ['p',`Com duas casas Decimais: ${valor.toFixed(2)}`]
]

dicio.forEach((list)=>{
    criarElemento(list[0],list[1]);
})

// criarElemento('h3',`Seu número é ${valor}`);
// criarElemento('p',`Raiz Quadrada ${Math.sqrt(valor)}`);
// criarElemento('p',`${valor} é um inteiro: ${Number.isInteger(valor)}`);
// criarElemento('p',`É NaN: ${Number.isNaN(valor)}`);
// criarElemento('p',`Arredondando para baixo: ${Math.floor(valor)}`);
// criarElemento('p',`Arredondando para cima: ${Math.ceil(valor)}`);
// criarElemento('p',`Com duas casas Decimais: ${valor.toFixed(2)}`);
