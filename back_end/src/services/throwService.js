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

const getAllThrowsByProvider = async (id_provider) => {
    const result = await throwModel.getAllThrowsById(id_provider);
    if (result === null) throw serverError.internalServerError();
    if (result.length === 0) throw clientError.notFound();

    return result;
};

const createThrow = async (Throw, id_provider) => {
    const { id_offer, ...rest } = Throw;
    const { error } = schemas.createThrow.validate({ id_provider, id_offer, ...rest });
    if (error) throw clientError.badRequest(error.details[0].message);
    
    const existThrow = await throwModel.getAllThrowsByThrow(id_offer);
    if (existThrow.length > 0) throw clientError.unauthorized('Already has throw!');

    const result = await throwModel.createThrow({ id_provider, id_offer, ...rest });
    if (result === null) throw serverError.internalServerError();
    
    return 'Create sucess!';
};

module.exports = {
    getAllThrows,
    createThrow,
    getAllThrowsByProvider,
};