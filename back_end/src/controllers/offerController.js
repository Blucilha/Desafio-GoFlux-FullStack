const offerService = require('../services/offerService');

const getAllOffers = async (_req, res) => {
    const result = await offerService.getAllOffers();
    const { code, message } = result;

    res.status(code).json(message);
};

const createOffer = async (req, res) => {
    const { body, params } = req;

    const result = await offerService.createOffer(body, params.id);
    const { code, message } = result;

    res.status(code).json(message);
};

const getAllOffersById = async (req, res) => {
    const { params } = req;

    const result = await offerService.getAllOffersById(params.id);
    const { code, message } = result;

    res.status(code).json(message);
};

module.exports = {
    getAllOffers,
    createOffer,
    getAllOffersById,
};