const transporterModel = require('../models/transporterModel');
const { code } = require('../utils/code');
const { message } = require('../utils/message');
const schemas = require('../schemas/transporterSchema');

const getAllTransporters = async () => {
    const result = await transporterModel.getAllTransporters();

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

const createTransporter = async (Transporter) => {
    const { error } = schemas.createTransporter.validate(Transporter);

    if (error) {
        return {
            code: code.BAD_REQUEST,
            message: error.details[0].message,
        };
    }

    const result = await transporterModel.createTransporte(Transporter);
    if (result === null) {
        return {
            code: code.SERVER_INTERNAL_ERROR,
            message: message.INTERNAL_SERVER_ERROR,
        };
    }

    return {
        code: code.CREATED,
        message: message.CREATE_SUCESS,
    };
};

const updateTransporter = async (id, Transporter) => {
    const result = await transporterModel.updateTransporter(id, Transporter);
    if (result === null) {
        return {
            code: code.SERVER_INTERNAL_ERROR,
            message: message.INTERNAL_SERVER_ERROR,
        };
    }

    return {
        code: code.STATUS_OK,
        message: message.UPDATE_SUCESS,
    };
};

module.exports = {
    createTransporter,
    getAllTransporters,
    updateTransporter,
};
