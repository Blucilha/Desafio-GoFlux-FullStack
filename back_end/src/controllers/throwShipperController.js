const rescue = require('express-rescue');
const throwByShipper = require('../services/throwShipperService');
const success = require('../utils/success');

const getThrowsByCustomer = rescue(async (req, res) => {
    const { id } = req.params;
    
    const result = await throwByShipper(id);
    res.status(success.OK).json({ message: result });
});

module.exports = getThrowsByCustomer;
