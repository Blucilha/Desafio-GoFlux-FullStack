/* eslint-disable max-lines-per-function */
/* eslint-disable camelcase */
/* eslint-disable complexity */
/* eslint-disable no-empty */
const { code } = require('../../utils/code');

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
            code: code.BAD_REQUEST,
            message: 'All fields must be filled.',
        };
    }
};

module.exports = {
    validationThrow,
};
