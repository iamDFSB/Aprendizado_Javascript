//             0         1          2         3
const arr = ["Dudu", "Felipe", "Henrique", "Daniel"];

// Irá simular o pop() do array:

// splice (index, delete, Elem 1, Elem 2, Elem 3)

// O valor maior numero que pode ter => Number.MAX_VALUE

const removido = arr.splice(2, Number.MAX_VALUE);

console.log(removido);
console.log(arr);

// Adiciona valores no index desejado

const desejado = arr.splice(2, 0, "Leo", "Frederico");

console.log(desejado);
console.log(arr);



