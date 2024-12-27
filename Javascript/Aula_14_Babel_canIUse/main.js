class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
}


// Para instalar o babel:
    // npm install --save-dev @babel/core @babel/preset-env @babel/cli

// Para utilizar e visualizar o resultado em um arquivo base: 
    // npx babel main.js -o bundle.js  --presets=@babel/env