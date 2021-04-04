module.exports = (sequelize, type) => {
    return sequelize.define('business', {
        id: {
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name: type.STRING,
        address: type.STRING,
        phone: type.STRING,
        comune: type.STRING,
        region: type.STRING
    });
}