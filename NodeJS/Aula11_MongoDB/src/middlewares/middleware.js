module.exports = (req, res, next) => {
    console.log("\nPassei no meu middeware global\n");
    if (req.body.nome) {
        req.body.nome = req.body.nome.replace("Daniel", "Danilo");
        console.log("Parabéns você existe: ", req.body.nome);
    }

    next();
}