const express = require('express');

const app = express();

// Method GET

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            <label>
                Nome:
                <input type="text" name="nome">
            </label>
            <button type="submit">Enviar</button>
        </form>
    `);
});


app.post('/', (req, res) => {
    res.send('Recebi o valor');
})


app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato.');
});


app.listen(3000, () => {
    console.log('Acesse:  http://localhost:3000');
    console.log('Servidor rodando na porta 3000');
}); // Adiciona a porta para rodar