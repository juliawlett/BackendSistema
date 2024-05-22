const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors({ origin: 'https://juliafullstack.site' }));
app.use(bodyParser.json());

app.post('/cadastrar', (req, res) => {
  const { primeiroNome, segundoNome, emailUsuario, senhaHash } = req.body;

  db.query(
    'INSERT INTO Usuario (primeiroNome, segundoNome, emailUsuario, senhaHash) VALUES (?, ?, ?, ?)',
    [primeiroNome, segundoNome, emailUsuario, senhaHash],
    (err, result) => {
      if (err) {
        console.error('Erro ao cadastrar usuário:', err);
        return res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
      }

      console.log('Usuário cadastrado com sucesso:', result);
      res.status(200).json({ message: 'Usuário cadastrado com sucesso!' });
    }
  );
});

module.exports = app;
