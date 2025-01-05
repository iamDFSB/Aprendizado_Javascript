
exports.paginaInicialGet = (req, res) => {
    res.send(`
        <form action="/contato"  method="POST">
            <label for="phone">
                Enter your phone number:<br />
                <small>Format: 123-456-7890</small>
            </label>

            <input type="tel" id="phone" name="phone" 
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
            
            <button type="submit">Enviar</button>
        </form>
    `)
}

exports.paginaInicialPost = (req, res) => {
    console.log('Contato recebido: ', req.body.phone);
    console.log(req.body);

    res.send('Contato Recebido');
}