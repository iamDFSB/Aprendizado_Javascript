exports.paginaInicialGet = (req, res) => {
    res.render('index');
}

exports.paginaInicialPost = (req, res) => {
    console.log('Valores recebidos: ');
    console.log(req.body);

    res.send('Valores recebidos');
}