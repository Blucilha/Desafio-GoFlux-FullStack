const transporterService = require('../services/transporterService');

const getAllTransporters = async (_req, res) => {
    const result = await transporterService.getAllTransporters();
    const { code, message } = result;

    res.status(code).json(message);
};

const createTransporter = async (req, res) => {
    const { body } = req;

    const result = await transporterService.createTransporter(body);
    const { code, message } = result;

    res.status(code).json(message);
};

const updateTransporter = async (req, res) => {
    const { params, body } = req;

    const result = await transporterService.updateTransporter(params.id, body);
    const { code, message } = result;

    res.status(code).json(message);
};

module.exports = {
    getAllTransporters,
    createTransporter,
    updateTransporter,
};