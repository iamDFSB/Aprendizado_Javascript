const s = Symbol(); // representa um valor único
const s2 = Symbol.for("Daniel"); // representa um valor único com chave

console.log(Symbol.keyFor(s2)); // Mostra a chave de um Symbol

