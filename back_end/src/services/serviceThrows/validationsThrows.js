/* eslint-disable max-lines-per-function */
/* eslint-disable camelcase */
/* eslint-disable complexity */
/* eslint-disable no-empty */
const { statusCode } = require('../../utils/statusCode');

const validationThrow = (Throw) => {
    const {
        id_offer,
        value,
        amount,
    } = Throw;

    if (
        id_offer === undefined
        || value === undefined
        || amount === undefined
        
    ) {
        return {
            code: statusCode.BAD_REQUEST,
            message: 'All fields must be filled.',
        };
    }
};

module.exports = {
    validationThrow,
};
