const rescue = require('express-rescue');
const shipperService = require('../services/shipperService');
const success = require('../utils/success');

const getAllShippers = rescue(async (_req, res) => {
    const result = await shipperService.getAllShippers();

    res.status(success.OK).json({ message: result });
});

const getAllShipperByDoc = rescue(async (req, res) => {
    const { doc } = req.body;
    
    const result = await shipperService.getAllShipperByDoc(doc);

    res.status(success.OK).json({ message: result[0] });
});

const createShipper = rescue(async (req, res) => {
    const { body } = req;

    const result = await shipperService.createShipper(body);

    res.status(success.Created).json({ message: result });
});

const updateShipper = rescue(async (req, res) => {
    const { params, body } = req;

    const result = await shipperService.updateShipper(params.id, body);

    res.status(success.OK).json({ message: result });
});

module.exports = {
    getAllShippers,
    createShipper,
    updateShipper,
    getAllShipperByDoc,
};
