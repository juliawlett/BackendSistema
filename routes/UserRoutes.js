const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');

// Definindo rota para criar usuário
router.post('/register', UserController.createUser);

module.exports = router;
