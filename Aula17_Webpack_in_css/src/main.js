import './assets/css/style.css';


const button = document.querySelector("button.btn-submit");

button.addEventListener('click', (e) => {
    const input = document.querySelector("input.input-submit");
    const res = input.value ? input.value : 'Está vazio';
    console.log(res);
});
