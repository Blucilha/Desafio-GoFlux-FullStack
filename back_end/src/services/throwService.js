/* eslint-disable camelcase */
const throwModel = require('../models/throwModel');
const { code } = require('../utils/code');
const { message } = require('../utils/message');
const schema = require('../schemas/throwSchema');

const getAllThrows = async () => {
    const result = await throwModel.getAllThrows();
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

const getAllThrowsByProvider = async (id_provider) => {
    const result = await throwModel.getAllThrowsById(id_provider);
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

const createThrow = async (Throw, id_provider) => {
    const { error } = schema.createThrow.validate({ id_provider, ...Throw });

    if (error) {
        return {
            code: code.BAD_REQUEST,
            message: error.details[0].message,
        };
    }

    const result = await throwModel.createThrow({ ...Throw, id_provider });

    return {
        code: code.CREATED,
        message: result,
    };
};

module.exports = {
    getAllThrows,
    createThrow,
    getAllThrowsByProvider,
};