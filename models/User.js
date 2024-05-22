const { DataTypes } = require('sequelize');
const sequelize = require('../db/conn');

const User = sequelize.define('User', {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    primeiroNome: {
        type: DataTypes.STRING(100), // Tamanho da string conforme definido na tabela
        allowNull: false,
    },
    segundoNome: {
        type: DataTypes.STRING(100), // Tamanho da string conforme definido na tabela
        allowNull: false,
    },
    emailUsuario: {
        type: DataTypes.STRING(200), // Tamanho da string conforme definido na tabela
        allowNull: false,
        unique: true,
    },
    senhaHash: {
        type: DataTypes.STRING(255), // Tamanho da string conforme definido na tabela
        allowNull: false,
    },
    // Adicione outras colunas conforme necessário
}, {
    tableName: 'Usuario', // Certifique-se de que o nome da tabela está correto
    timestamps: false, // Se você não estiver usando as colunas `createdAt` e `updatedAt`
});

module.exports = User;
