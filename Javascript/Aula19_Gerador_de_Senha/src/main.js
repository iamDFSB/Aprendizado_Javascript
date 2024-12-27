// Gerador de Senha
import {geradorDeSenha} from './modules/GeraSenha.js';
import './assets/css/style.css';


const button = document.querySelector("div.button-submit button");
const p = document.querySelector("p.senha-value");
const chac = document.querySelector("input[type='number']");
const checks = document.querySelectorAll("input[type='checkbox']");

button.addEventListener("click", (e) => {
    const dictionary = {};
    checks.forEach((input) => {
        dictionary[input.name] = input.checked;
    });
    const result = geradorDeSenha(chac.value, dictionary);
    p.textContent = result;
});
