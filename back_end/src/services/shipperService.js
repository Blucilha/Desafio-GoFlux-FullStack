const shipperModel = require('../models/shipperModel');
const { code } = require('../utils/code');
const { message } = require('../utils/message');
const clientError = require('../utils/clientError');
const serverError = require('../utils/serverError');
const schemas = require('../schemas/shipperSchema');

const getAllShippers = async () => {
    const result = await shipperModel.getAllShippers();

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

const createShipper = async (shipper) => {
    const { error } = schemas.createShipper.validate(shipper);
    if (error) throw clientError.badRequest(error.details[0].message);

    const result = await shipperModel.createShipper(shipper);
    if (result === null) throw serverError.internalServerError();

    return 'Create sucess!';
};

const updateShipper = async (id, shipper) => {
    const result = await shipperModel.updateShipper(id, shipper);

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
    createShipper,
    getAllShippers,
    updateShipper,
};
