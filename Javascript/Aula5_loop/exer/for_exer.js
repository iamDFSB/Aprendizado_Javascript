const div_pai = document.querySelector("div.textos");

let elemento = [
    {tag:"p", texto:"Meu nome"},
    {tag:"h2", texto:"Gosto de fruta"},
    {tag:"span", texto:"Gosto de frutas"}
]

for(let i = 0; i < elemento.length; i+=1){
    let { tag , texto } = elemento[i];
    const create_element = document.createElement(tag);
    create_element.textContent = texto;
    div_pai.appendChild(create_element);
}







