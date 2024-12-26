// Gerador de CPF
const GeraCPF = require('./modules/GeraCPF');
import './assets/css/style.css';


(() => {

    const div = document.querySelector("div.cpf-gerado");
    
    const h2 = document.createElement("h2");
    h2.textContent = 'Seu novo CPF: ';
    
    const p = document.createElement("p");
    
    const obj = new GeraCPF.default;
    p.textContent = obj.geraNovoCPF();
    
    div.appendChild(h2);
    div.appendChild(p);

})()
