const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Task = db.define('Task', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING,
    },
    contato: {
        type: DataTypes.STRING,
    },
    endereco: {
        type: DataTypes.STRING,
    },
    arvore: {
        type: DataTypes.STRING,
    },
    matricula: {
        type: DataTypes.STRING,
    },
    done: {
        type: DataTypes.BOOLEAN,
    }
})
module.exports = Task