
let info = 'bom dia' 

try{
    console.log(info);

}catch(ReferenceError){
    console.log("Nâo existe");
    console.log(ReferenceError);
}

if (typeof info !== 'number') {
    throw new TypeError("A variavel info deveria ser number");
}
