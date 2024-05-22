const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importe o pacote 'cors'
const db = require('./db');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://juliafullstack.site');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use(cors());
app.use(cors({ origin: 'https://juliafullstack.site' }));

app.use(bodyParser.json());

app.post('/cadastrar', (req, res) => {
    const { primeiroNome, segundoNome, emailUsuario, senhaHash } = req.body;
  
    db.query('INSERT INTO Usuario (primeiroNome, segundoNome, emailUsuario, senhaHash) VALUES (?, ?, ?, ?)', [primeiroNome, segundoNome, emailUsuario, senhaHash], (err, result) => {
      if (err) {
        console.error('Erro ao cadastrar usuário:', err);
        return res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
      }
  
      console.log('Usuário cadastrado com sucesso:', result);
      res.status(200).json({ message: 'Usuário cadastrado com sucesso!' });
    });
  });

module.exports = app;
