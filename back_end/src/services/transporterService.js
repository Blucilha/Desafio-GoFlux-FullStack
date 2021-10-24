const transporterModel = require('../models/transporterModel');
const clientError = require('../utils/clientError');
const serverError = require('../utils/serverError');
const schemas = require('../schemas/transporterSchema');

const getAllTransporters = async () => {
    const result = await transporterModel.getAllTransporters();

    if (result === null) throw serverError.internalServerError();

    return result;
};

const getAllTransporterByDoc = async (doc) => {
    const result = await transporterModel.getAllTransporterByDoc(doc);
    if (result === null) throw serverError.internalServerError();
    if (result.length === 0) throw clientError.notFound();

    return result;
};

const createTransporter = async (Transporter) => {
    const { error } = schemas.createTransporter.validate(Transporter);
    if (error) throw clientError.badRequest(error.details[0].message);
    
    const existTransporter = await transporterModel.getAllTransporterByDoc(Transporter.doc);
    if (existTransporter.length > 0) throw clientError.unauthorized('Client existent!');

    const result = await transporterModel.createTransporter(Transporter);
    if (result === null) throw serverError.internalServerError();
    
    return 'Create sucess!';
};

const updateTransporter = async (id, Transporter) => {
    const { error } = schemas.updateTransporter.validate(Transporter);
    if (error) throw clientError.badRequest(error.details[0].message);

    const result = await transporterModel.updateTransporter(id, Transporter);
    if (result === null) throw serverError.internalServerError();

    return 'Update success!';
};

module.exports = {
    createTransporter,
    getAllTransporters,
    updateTransporter,
    getAllTransporterByDoc,
};
