function exec(nome, idade) {
    return {
        nome,
        idade,
       get fala(){
            return `${this.nome} tem ${this.idade} anos.`
        },
        
        //Getter 
        get is_nome(){
            return `Meu nome é ${this.nome}`
        },
        /**
         * @param {(arg0: string) => void} nome_novo
         */
        //Setter
        set set_nome(nome_novo){
            this.nome = nome_novo;
        }
    }
}

let obj = exec("Daniel", 12); 
console.log(obj.fala);
console.log(obj.nome);
console.log(obj.idade);
console.log(obj.is_nome);

console.log("-------------------------------------------------------------------");
// Setando novo nome
obj.set_nome = "Jonas";
console.log(obj.fala);
console.log(obj.nome);
console.log(obj.idade);
console.log(obj.is_nome);