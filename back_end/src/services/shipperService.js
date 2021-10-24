const shipperModel = require('../models/shipperModel');
const clientError = require('../utils/clientError');
const serverError = require('../utils/serverError');
const schemas = require('../schemas/shipperSchema');

const getAllShippers = async () => {
    const result = await shipperModel.getAllShippers();

    if (result === null) throw serverError.internalServerError();

    return result;
};

const getAllShipperByDoc = async (doc) => {
    const result = await shipperModel.getAllShipperByDoc(doc);
    if (result === null) throw serverError.internalServerError();
    if (result.length === 0) throw clientError.notFound();

    return result;
};

const createShipper = async (shipper) => {
    const { error } = schemas.createShipper.validate(shipper);
    if (error) throw clientError.badRequest(error.details[0].message);
    
    const existShipper = await shipperModel.getAllShipperByDoc(shipper.doc);
    if (existShipper.length > 0) throw clientError.unauthorized('Client existent!');

    const result = await shipperModel.createShipper(shipper);
    if (result === null) throw serverError.internalServerError();
    
    return 'Create sucess!';
};

const updateShipper = async (id, shipper) => {
    const { error } = schemas.updateShipper.validate(shipper);
    if (error) throw clientError.badRequest(error.details[0].message);

    const result = await shipperModel.updateShipper(id, shipper);
    if (result === null) throw serverError.internalServerError();

    return 'Update success!';
};

module.exports = {
    createShipper,
    getAllShippers,
    getAllShipperByDoc,
    updateShipper,
};
