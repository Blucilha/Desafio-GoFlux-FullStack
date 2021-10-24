const throwService = require('../services/throwService');

const getAllThrows = async (_req, res) => {
    const result = await throwService.getAllThrows();
    const { code, message } = result;

    res.status(code).json(message);
};

const createThrow = async (req, res) => {
    const { body, params } = req;

    const result = await throwService.createThrow(body, params.id);
    const { code, message } = result;

    res.status(code).json(message);
};

const getAllThrowsByIdProvider = async (req, res) => {
    const { params } = req;

    const result = await throwService.getAllThrowsByProvider(params.id);
    const { code, message } = result;

    res.status(code).json(message);
};

module.exports = {
    getAllThrows,
    createThrow,
    getAllThrowsByIdProvider,
};