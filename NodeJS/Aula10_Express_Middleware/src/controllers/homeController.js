exports.paginaInicialGet = (req, res) => {
    res.render('index');
    // console.log("Passei pelo get \n");
    // console.log("Achei a session: ", req.session);

    return; // indica que os middlewares acabem aqui;
}

exports.paginaInicialPost = (req, res) => {
    console.log('Valores recebidos: ');
    console.log(req.body);

    res.render('index');

    return; // indica que os middlewares acabem aqui;
}