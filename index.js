const express = require('express');
const cors = require('cors');
const app = express();
const conn = require('./db/conn');
require('dotenv').config();

app.use(express.json());


const allowedOrigins = [process.env.FRONTEND_URL, 'https://juliafullstack.site'];
app.use(cors({
  credentials: true,
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

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
