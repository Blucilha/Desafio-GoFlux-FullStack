/* eslint-disable camelcase */
const { addOne, getAll, getAllById } = require('../../models/modelThrows');
const { statusCode } = require('../../constants/statusCode');

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
    const result = await addOne({
        id_provider: +provider,
        ...Throw,
    });

    return {
        code: statusCode.STATUS_OK,
        message: result,
    };
};

module.exports = {
    addThrow,
    getAllThrow,
    getAllThrowByProvider,
};