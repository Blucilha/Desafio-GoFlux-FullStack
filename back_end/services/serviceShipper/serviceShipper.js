const { addOne, getAll, updateOne } = require('../../models/modelShippers');
const { statusCode } = require('../../constants/statusCode');
const validations = require('./validationsShipper');

const getAllShippers = async () => {
    const result = await getAll();
    return {
        code: statusCode.STATUS_OK,
        message: result,
    };
};

const addShipper = async (shipper) => {
    const bodyIsValid = validations.validationBody(shipper);
    const CNPJisValid = validations.validationCNPJ(shipper);

    if (bodyIsValid || CNPJisValid) {
        return bodyIsValid || CNPJisValid;
    }

    const allShippers = await getAll();

    const result = await addOne({
        _id: allShippers.length + 1,
        ...shipper,
    });

    return {
        code: statusCode.CREATED,
        message: result,
    };
};

const updateShipper = async (id, shipper) => {
    const bodyIsValid = validations.validationBody(shipper);
    const CNPJisValid = validations.validationCNPJ(shipper);

    if (bodyIsValid || CNPJisValid) {
        return bodyIsValid || CNPJisValid;
    }

    const result = await updateOne(+id, shipper);
    return {
        code: statusCode.STATUS_OK,
        message: result,
    };
};

module.exports = {
    addShipper,
    getAllShippers,
    updateShipper,
};
