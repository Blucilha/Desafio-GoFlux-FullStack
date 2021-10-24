const rescue = require('express-rescue');
const offerService = require('../services/offerService');
const success = require('../utils/success');

const getAllOffers = rescue(async (_req, res) => {
    const result = await offerService.getAllOffers();

    res.status(success.OK).json({ message: result });
});

const createOffer = rescue(async (req, res) => {
    const { body, params } = req;

    const result = await offerService.createOffer(body, params.id);

    res.status(success.Created).json({ message: result });
});

const getAllOffersById = rescue(async (req, res) => {
    const { params } = req;

    const result = await offerService.getAllOffersByCustomer(params.id);

    res.status(success.OK).json({ message: result });
});

const deleteOffersById = rescue(async (req, res) => {
    const { body } = req;

    const result = await offerService.deleteOffer(body.id);

    res.status(success.OK).json({ message: result });
});

module.exports = {
    getAllOffers,
    createOffer,
    getAllOffersById,
    deleteOffersById,
};