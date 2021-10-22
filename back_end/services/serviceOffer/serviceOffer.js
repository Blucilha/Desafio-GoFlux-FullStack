/* eslint-disable camelcase */
const { addOne, getAll, getAllById } = require('../../models/modelOffer');
const { statusCode } = require('../../constants/statusCode');

const getAllOffer = async () => {
    const result = await getAll();
    return {
        code: statusCode.STATUS_OK,
        message: result,
    };
};

const getAllOfferById = async (id) => {
    const result = await getAllById(+id);
    return {
        code: statusCode.STATUS_OK,
        message: result,
    };
};

const addOffer = async (Offer, customer) => {
    const allOffers = await getAll();

    const result = await addOne({
        _id: allOffers.length + 1,
        id_customer: +customer,
        ...Offer,
    });

    return {
        code: statusCode.STATUS_OK,
        message: result,
    };
};

module.exports = {
    addOffer,
    getAllOffer,
    getAllOfferById,
};
