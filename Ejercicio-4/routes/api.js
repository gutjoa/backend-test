const router = require('express').Router();

const apiShippingRouter = require('./api/shipping');

router.use('/shipping', apiShippingRouter);

module.exports = router;