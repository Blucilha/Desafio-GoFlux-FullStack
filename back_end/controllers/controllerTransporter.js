const serviceTransporter = require('../services/serviceTransporter/serviceTransporter');

const getAll = async (_req, res) => {
    const result = await serviceTransporter.getAllTransporter();
    const { code, message } = result;

    res.status(code).json(message);
};

const addOne = async (req, res) => {
    const { body } = req;

    const result = await serviceTransporter.addTransporter(body);
    const { code, message } = result;

    res.status(code).json(message);
};

const updateOne = async (req, res) => {
    const { params, body } = req;

    const result = await serviceTransporter.updateTransporter(params.id, body);
    const { code, message } = result;

    res.status(code).json(message);
};

module.exports = {
    getAll,
    addOne,
    updateOne,
};