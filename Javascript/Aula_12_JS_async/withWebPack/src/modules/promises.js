
function promises() {
    return new Promise((resolve, reject) => {
        console.log("Baixando o Arquivo");
        setInterval(() => {
            resolve('Deu o tempo');
        }, 2000);
    })
}

export default async function execute() {
    const response = await promises();
    console.log(response);
    console.log("Terminou");
}