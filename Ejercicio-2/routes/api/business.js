const router = require('express').Router();

const { Business } = require('../../db');

router.get('/', async (req, res) => {
    const business = await  Business.findAll()
    .then(function(data){
        const res = { success: true, msg: "Listado de datos", data: data }
        return res;
    })
    .catch(error =>{
        const res = { success: false,  msg: "Hubo un error", error: error }
        return res;
    });

    res.json(business);
});

router.post('/', async (req, res) => {
 
    const business = await Business.create({
            name: req.body.name,
            address: req.body.address,
            phone: req.body.phone,
            comune: req.body.commune,
            region: req.body.region
        })
        .then(function(data){
            const res = { success: true, msg: "Se a creado correctamente", data: data }
            return res;
        })
        .catch(error =>{
            const res = { success: false,  msg: "Hubo un error", error: error }
            return res;
        })
 
    res.json(business);
});

router.get('/:id/edit', async (req, res) => {
    const business = await  Business.findAll({
        where: {
            id: req.params.id
        }
    })
    .then(function(data){
        const res = { success: true, msg: "empresa", data: data }
        return res;
    })
    .catch(error =>{
        const res = { success: false,  msg: "Hubo un error", error: error }
        return res;
    });
    
    res.json(business);
});

router.put('/:id/update', async (req, res) => {
    const business = await Business.update({
            name: req.body.name,
            address: req.body.address,
            phone: req.body.phone,
            comune: req.body.commune,
            region: req.body.region
        }, 
        {
            where: {
                id : req.params.id
            }
        })
        .then(function(data){
            const res = { success: true, msg: "Se a actualizado correctamente"}
            return res;
        })
        .catch(error =>{
            const res = { success: false,  msg: "Hubo un error", error: error }
            return res;
        })

    res.json(business);
});


router.delete('/:id', async (req, res) => {
    const business = await  Business.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(function(data){
        const res = { success: true, msg: "Se elimino correctamente"}
        return res;
    })
    .catch(error =>{
        const res = { success: false,  msg: "Hubo un error", error: error }
        return res;
    });
    
    res.json(business);
});

module.exports = router;