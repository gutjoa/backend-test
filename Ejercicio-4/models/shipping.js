module.exports = (sequelize, type) => {
    return sequelize.define('shipping', {
        id: {
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        shipping_order: type.INTEGER,
        content_description: type.STRING,
        imported_id: type.INTEGER,
        order_price: type.FLOAT,
        weight: type.FLOAT,
        volume: type.FLOAT,
        type: type.STRING,
        warehouse_code: type.INTEGER,
        customer_name: type.STRING,
        customer_email: type.STRING,
        customer_phone: type.INTEGER,
        home_address_place: type.STRING,
        home_address_full_address: type.STRING,
        carrier_code: {
            type: type.STRING,
            allowNull: true
        },
        tracking_number: {
            type: type.STRING,
            allowNull: true
        }
    });
}