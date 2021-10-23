const serviceOffer = require('../services/serviceOffer/serviceOffer');

const getAll = async (_req, res) => {
    const result = await serviceOffer.getAllOffer();
    const { code, message } = result;

    res.status(code).json(message);
};

const addOne = async (req, res) => {
    const { body, params } = req;

    const result = await serviceOffer.addOffer(body, params.id);
    const { code, message } = result;

    res.status(code).json(message);
};

const getAllById = async (req, res) => {
    const { params } = req;

    const result = await serviceOffer.getAllOfferById(params.id);
    const { code, message } = result;

    res.status(code).json(message);
};

module.exports = {
    getAll,
    addOne,
    getAllById,
};