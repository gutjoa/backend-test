const Sequelize = require('sequelize');

const shippingModel = require('./models/shipping');

const sequelize = new Sequelize('ejercicio4', 'ejercicio4', 'secret',{
    host:'localhost',
    dialect: 'mysql'
});

const Shipping = shippingModel(sequelize, Sequelize);

sequelize.sync( { force :false})
    .then(()=>{
        console.log("Sincronizado");
    })

module.exports = {
    Shipping
}