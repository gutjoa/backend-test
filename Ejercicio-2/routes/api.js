const router = require('express').Router();

const apiBusinessRouter = require('./api/business');

router.use('/business', apiBusinessRouter);

module.exports = router;