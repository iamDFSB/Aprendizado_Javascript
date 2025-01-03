const express = require('express');

const app = express();

// É usado para permitir que os valores do input sejam colocados no req.body
app.use(express.urlencoded({extended: true})); 

// Method GET
app.get('/', (req, res) => {
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
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Recebi o formulário seu nome é: ${req.body.meuNome}`);
})


app.get('/teste/:idUser?/:parametro?', (req, res) => {
    console.log(req.params); // parametros do link
    console.log(req.query); // query string
    res.send(req.query.nome);
})


app.listen(3000, () => {
    console.log('Acesse:  http://localhost:3000');
    console.log('Servidor rodando na porta 3000');
}); // Adiciona a porta para rodar