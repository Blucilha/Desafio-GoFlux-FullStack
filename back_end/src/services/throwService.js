/* eslint-disable camelcase */
const throwModel = require('../models/throwModel');
const clientError = require('../utils/clientError');
const serverError = require('../utils/serverError');
const schemas = require('../schemas/throwSchema');

const getAllThrows = async () => {
    const result = await throwModel.getAllThrows();

    if (result === null) throw serverError.internalServerError();

    return result;
};

const getAllThrowsByProvider = async (id_offer) => {
    const result = await throwModel.getAllThrowsById(id_offer);
    if (result === null) throw serverError.internalServerError();

    return result;
};

const createThrow = async (Throw, id_provider) => {
    const { id_offer, ...rest } = Throw;
    const { error } = schemas.createThrow.validate({ id_provider, id_offer, ...rest });
    if (error) throw clientError.badRequest(error.details[0].message);
    
    const result = await throwModel.createThrow({ id_provider, id_offer, ...rest });
    if (result === null) throw serverError.internalServerError();
    
    return 'Create sucess!';
};

module.exports = {
    getAllThrows,
    createThrow,
    getAllThrowsByProvider,
};