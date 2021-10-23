/* eslint-disable max-lines-per-function */
/* eslint-disable camelcase */
/* eslint-disable complexity */
/* eslint-disable no-empty */
const { statusCode } = require('../../constants/statusCode');

const validationOffer = (offer) => {
    const {
        from,
        to,
        initial_value,
        amount,
        amount_type,
    } = offer;

    if (
        from === ''
        || to === ''
        || typeof initial_value !== 'number'
        || typeof amount !== 'number'
        || amount_type === ''
    ) {
        return {
            code: statusCode.BAD_REQUEST,
            message: 'All fields must be filled.',
        };
    }
};

const validationCustomer = (customer) => {
    if (customer === '') {
        return {
            code: statusCode.BAD_REQUEST,
            message: 'Id not found.',
        };
    }
};

module.exports = {
    validationOffer,
    validationCustomer,
};
