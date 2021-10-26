const offerModel = require('../models/offerModel');
const throwModel = require('../models/throwModel');

const throwByShipper = async (id) => {
    const getAllThrows = await throwModel.getAllThrows();
    const getOffersByIdCustomer = await offerModel.getOffersByIdCustomer(id);

    const result = getOffersByIdCustomer
        .map((elem) => getAllThrows.filter((throws) => throws.id === elem.id_offer));

    return result;
};

module.exports = throwByShipper;