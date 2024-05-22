const User = require('../models/User'); // Modelo User

const createUser = async (req, res) => {
  const { primeiroNome, segundoNome, emailUsuario, senhaHash } = req.body;

  try {
    const newUser = await User.create({ primeiroNome, segundoNome, emailUsuario, senhaHash });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};

module.exports = {
  createUser,
};
