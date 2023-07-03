const Sequelize = require("sequelize")
const connection = require("../database/database")

const Protocolo = connection.define('protocolos', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone:{
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    veiculos:{
        type: Sequelize.STRING,
        allowNull:false
    },
    observ: {
        type: Sequelize.STRING,
        allowNull:false
    }
})

//Protocolo.sync({force: true})
module.exports = Protocolo
