const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('shortener', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

    pool:{
        max: 20,
        min: 0,
        aquire: 300,
        idle: 50
    }
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;