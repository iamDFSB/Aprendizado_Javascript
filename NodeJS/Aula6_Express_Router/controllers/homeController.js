exports.paginaInicialGet = (req, res) => {
    res.send(`
        <form action="/" method="post">
            <label>
                Nome:
                <input type="text" name="meuNome">
            </label>
            <label>
                Sobrenome:
                <input type="text" name="meuSobrenome">
            </label>
            <button type="submit">Enviar</button>
        </form>
    `);
}

exports.paginaInicialPost = (req, res) => {
    console.log('Valores recebidos: ');
    console.log(req.body);

    res.send('Valores recebidos');
}