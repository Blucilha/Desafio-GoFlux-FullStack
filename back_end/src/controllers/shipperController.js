const rescue = require('express-rescue');
const shipperService = require('../services/shipperService');
const success = require('../utils/success');

const getAllShippers = async (_req, res) => {
    const result = await shipperService.getAllShippers();
    const { code, message } = result;

    res.status(code).json(message);
};

const createShipper = rescue(async (req, res) => {
    const { body } = req;

    const result = await shipperService.createShipper(body);

    res.status(success.Created).json({ message: result });
});

const updateShipper = async (req, res) => {
    const { params, body } = req;

    const result = await shipperService.updateShipper(params.id, body);
    const { code, message } = result;

    res.status(code).json(message);
};

module.exports = {
    getAllShippers,
    createShipper,
    updateShipper,
};
