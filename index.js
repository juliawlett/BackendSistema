const express = require('express');
const cors = require('cors');
const app = express();
const conn = require('./db/conn');
require('dotenv').config();

app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL }));

// Rotas
const UserRoutes = require('./routes/UserRoutes');
// Adicione outras rotas aqui

app.use('/users', UserRoutes);

const PORT = process.env.PORT || 8000;  // Definindo a variável PORT

conn
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
