/* eslint-disable max-lines-per-function */
/* eslint-disable camelcase */
const offerModel = require('../models/offerModel');
const clientError = require('../utils/clientError');
const serverError = require('../utils/serverError');
const schemas = require('../schemas/offerSchema');

const getAllOffers = async () => {
    const result = await offerModel.getAllOffers();
    if (result === null) throw serverError.internalServerError();

    return result;
};

const getAllOffersByCustomer = async (id_customer) => {
    const result = await offerModel.getOffersByIdCustomer(id_customer);
    if (result === null) throw serverError.internalServerError();

    return result;
};

const createOffer = async (offer, id_customer) => {
    const { id, ...rest } = offer;
    const { error } = schemas.createOffer.validate({ id, id_customer, ...rest });
    if (error) throw clientError.badRequest(error.details[0].message);
    
    const existOffer = await offerModel.getOffersById(id);
    if (existOffer.length > 0) throw clientError.unauthorized('Offer existent!');

    const result = await offerModel.createOffer({ id, id_customer, ...rest });
    if (result === null) throw serverError.internalServerError();
    
    return 'Create sucess!';
};

const deleteOffer = async (id) => {
    const existOffer = await offerModel.getOffersById(id);
    if (existOffer.length === 0) throw clientError.unauthorized('Offer not existent!');

    const result = await offerModel.deleteOffer(id);
    if (result === null) throw serverError.internalServerError();
    
    return 'Delete sucess!';
};

module.exports = {
    getAllOffers,
    createOffer,
    getAllOffersByCustomer,
    deleteOffer,
};
