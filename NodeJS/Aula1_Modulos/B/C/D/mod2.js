// module.exports = (x, y) => {
//     return x * y;
// };

module.exports = class Cachorro{
    constructor(nome){
        this.nome = nome;
    }

    latir(){
        console.log(this.nome, ': auauauau');
        console.log(__dirname);
    }
}
