/* eslint-disable camelcase */
const { addOne, getAll, getAllById } = require('../../models/modelThrows');
const { statusCode } = require('../../constants/statusCode');
const validations = require('./validationsThrows');

const getAllThrow = async () => {
    const result = await getAll();
    return {
        code: statusCode.STATUS_OK,
        message: result,
    };
};

const getAllThrowByProvider = async (id) => {
    const result = await getAllById(+id);
    return {
        code: statusCode.STATUS_OK,
        message: result,
    };
};

const addThrow = async (Throw, provider) => {
    const validationThrow = validations.validationThrow(Throw);
    if (validationThrow) {
        return validationThrow;
    }
    const { value, amount, ...rest } = Throw;

    const result = await addOne({
        id_provider: +provider,
        ...rest,
        value: value.toFixed(2),
        amount: amount.toFixed(2),
    });

    return {
        code: statusCode.CREATED,
        message: result,
    };
};

module.exports = {
    addThrow,
    getAllThrow,
    getAllThrowByProvider,
};