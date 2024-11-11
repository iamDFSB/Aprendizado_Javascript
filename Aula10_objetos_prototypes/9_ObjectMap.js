const pessoas = [
    {id:3, nome:"Vitória"},
    {id:2, nome:"Daniel"},
    {id:1, nome:"Felipe"}
]


// O Erro que acontece é porque no caso não podemos ordenar o Objeto
// const newPessoa = {};
// for (let pessoa of pessoas){
//     const {id} = pessoa;
//     newPessoa[id] = {...pessoa};
// }


// Jeito certo para manter a ordem seria usando o Map:
const newPessoa = new Map();
for (let pessoa of pessoas){
    const {id} = pessoa;
    newPessoa.set(id, {...pessoa});
}

console.log(newPessoa.get(2));

newPessoa.delete(1);

console.log(newPessoa);
