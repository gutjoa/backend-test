const Sequelize = require('sequelize');

const businessModel = require('./models/business');

const sequelize = new Sequelize('ejercicio2', 'ejercicio2', 'secret',{
    host:'localhost',
    dialect: 'mysql'
});

const Business = businessModel(sequelize, Sequelize);

sequelize.sync( { force :false})
    .then(()=>{
        console.log("Sincronizado");
    })

module.exports = {
    Business
}