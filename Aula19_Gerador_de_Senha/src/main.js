// Gerador de Senha
const {geradorDeSenha} = require('./modules/GeraSenha');
import './assets/css/style.css';


const button = document.querySelector("div.button-submit button");
const p = document.querySelector("p.senha-value");
const checks = document.querySelectorAll("input[type='checkbox']");

button.addEventListener("click", (e) => {
    const dictionary = {};
    checks.forEach((input) => {
        dictionary[input.name] = input.checked;
    });
    const result = geradorDeSenha(10, dictionary);
    p.textContent = result;
});
