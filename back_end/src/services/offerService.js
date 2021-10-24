/* eslint-disable max-lines-per-function */
/* eslint-disable camelcase */
const offerModel = require('../models/offerModel');
const { code } = require('../utils/code');
const { message } = require('../utils/message');
const schema = require('../schemas/offerSchema');

const getAllOffers = async () => {
    const result = await offerModel.getAllOffers();
    if (result === null) {
        return {
            code: code.SERVER_INTERNAL_ERROR,
            message: message.INTERNAL_SERVER_ERROR,
        };
    }

    return {
        code: code.STATUS_OK,
        message: result,
    };
};

const getAllOffersById = async (id_customer) => {
    const result = await offerModel.getOffersById(id_customer);
    if (result === null) {
        return {
            code: code.SERVER_INTERNAL_ERROR,
            message: message.INTERNAL_SERVER_ERROR,
        };
    }

    return {
        code: code.STATUS_OK,
        message: result,
    };
};

const createOffer = async (offer, id_customer) => {
    const { error } = schema.createOffer.validate({ id_customer, ...offer });

    if (error) {
        return {
            code: code.BAD_REQUEST,
            message: error.details[0].message,
        };
    }

    const result = await offerModel.createOffer({ ...offer, id_customer });

    if (result === null) {
        return {
            code: code.SERVER_INTERNAL_ERROR,
            message: message.INTERNAL_SERVER_ERROR,
        };
    }

    return {
        code: code.CREATED,
        message: message.CREATE_SUCESS,
    };
};

module.exports = {
    getAllOffers,
    createOffer,
    getAllOffersById,
};
