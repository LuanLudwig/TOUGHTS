const { DataTypes } = require('sequelize')

const db = require('../db/conn')

// User
const User = require('./User')

const Tought = db.define('Tought', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
})

//Relacionamento entre tabelas, Um Tought pertence a um User, um User tem varias Toughts
Tought.belongsTo(User)
User.hasMany(Tought)

module.exports = Tought