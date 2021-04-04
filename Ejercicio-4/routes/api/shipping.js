const router = require('express').Router();
const { Shipping } = require('../../db');

router.post('/', async (req, res) => {
    
    const body = JSON.parse(req.body.item[0].request.body.raw);

    const shipping = await Shipping.create({
        shipping_order: body.shipping_order.n_packages,
        content_description: body.shipping_order.content_description,
        imported_id: body.shipping_order.imported_id,
        order_price: body.shipping_order.order_price,
        weight: body.shipping_order.weight,
        volume: body.shipping_order.volume,
        type: body.shipping_order.type,
        warehouse_code: body.shipping_origin.warehouse_code,
        customer_name: body.shipping_destination.customer.name,
        customer_email: body.shipping_destination.customer.email,
        customer_phone: body.shipping_destination.customer.phone,
        home_address_place: body.shipping_destination.delivery_address.home_address.place,
        home_address_full_address: body.shipping_destination.delivery_address.home_address.full_address,
        carrier_code: body.carrier.carrier_code || null,
        tracking_number: body.carrier.tracking_number || null
    })
    .then(function(data){
        const res = { success: true, msg: "Se a creado correctamente", data: data.dataValues }
        return res;
    })
    .catch(error =>{
        const res = { success: false,  msg: "Hubo un error", error: error }
        return res;
    })

    res.json(shipping);
});



module.exports = router;