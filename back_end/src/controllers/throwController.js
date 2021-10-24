const rescue = require('express-rescue');
const throwService = require('../services/throwService');
const success = require('../utils/success');

const getAllThrows = rescue(async (_req, res) => {
    const result = await throwService.getAllThrows();

    res.status(success.OK).json({ message: result });
});

const createThrow = rescue(async (req, res) => {
    const { body, params } = req;

    const result = await throwService.createThrow(body, params.id);

    res.status(success.Created).json({ message: result });
});

const getAllThrowsByIdProvider = rescue(async (req, res) => {
    const { params } = req;

    const result = await throwService.getAllThrowsByProvider(params.id);

    res.status(success.OK).json({ message: result });
});

module.exports = {
    getAllThrows,
    createThrow,
    getAllThrowsByIdProvider,
};