
exports.paginaInicialContatoGet = (req, res) => {
    res.send('Esses são nossos contatos');
    console.log("Passei pela função get do contato");
}

exports.paginaInicialContatoPost = (req, res) => {
    console.log('Contato recebido: ', req.body.phone);
    console.log(req.body);
}