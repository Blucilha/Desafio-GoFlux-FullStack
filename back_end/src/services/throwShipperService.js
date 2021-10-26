const offerModel = require('../models/offerModel');
const throwModel = require('../models/throwModel');

const throwByShipper = async (id) => {
    const getAllThrows = await throwModel.getAllThrows();
    const getOffersByIdCustomer = await offerModel.getOffersByIdCustomer(id);

    const result = getOffersByIdCustomer
        .map((elem) => getAllThrows.filter((throws) => throws.id_offer === elem.id)[0]);
    const notEmpty = result.filter((elem) => elem !== undefined);
    console.log(notEmpty);
    return notEmpty;
};

module.exports = throwByShipper;