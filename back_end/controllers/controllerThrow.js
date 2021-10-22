const serviceThrow = require('../services/serviceThrows/serviceThrows');

const getAll = async (_req, res) => {
    const result = await serviceThrow.getAllThrow();
    const { code, message } = result;

    res.status(code).json(message);
};

const addOne = async (req, res) => {
    const { body, params } = req;

    const result = await serviceThrow.addThrow(body, params.id);
    const { code, message } = result;

    res.status(code).json(message);
};

const getAllById = async (req, res) => {
    const { params } = req;

    const result = await serviceThrow.getAllThrowByProvider(params.id);
    const { code, message } = result;

    res.status(code).json(message);
};

module.exports = {
    getAll,
    addOne,
    getAllById,
};