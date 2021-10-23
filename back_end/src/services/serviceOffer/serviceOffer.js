/* eslint-disable camelcase */
const { addOne, getAll, getAllById } = require('../../models/modelOffer');
const { statusCode } = require('../../utils/statusCode');
const validations = require('./validationsOffer');

const getAllOffer = async () => {
    const result = await getAll();
    return {
        code: statusCode.STATUS_OK,
        message: result,
    };
};

const getAllOfferById = async (customer) => {
    const customerIsValid = validations.validationCustomer(customer);

    if (customerIsValid) {
        return customerIsValid;
    }

    const result = await getAllById(+customer);
    return {
        code: statusCode.STATUS_OK,
        message: result,
    };
};

const addOffer = async (offer, customer) => {
    const customerIsValid = validations.validationCustomer(customer);
    const offerIsValid = validations.validationOffer(offer);

    if (customerIsValid || offerIsValid) {
        return customerIsValid || offerIsValid;
    }

    const allOffers = await getAll();
    const { initial_value, amount, ...rest } = offer;
    const result = await addOne({
        _id: allOffers.length + 1,
        id_customer: +customer,
        initial_value: initial_value.toFixed(2),
        amount: amount.toFixed(2),
        ...rest,
    });

    return {
        code: statusCode.CREATED,
        message: result,
    };
};

module.exports = {
    addOffer,
    getAllOffer,
    getAllOfferById,
};
