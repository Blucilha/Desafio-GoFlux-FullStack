const { addOne, getAll, updateOne } = require('../../models/modelShippers');
const { code } = require('../../utils/code');
const validations = require('./validationsShipper');

const getAllShippers = async () => {
    const result = await getAll();
    return {
        code: code.STATUS_OK,
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
        code: code.CREATED,
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
        code: code.STATUS_OK,
        message: result,
    };
};

module.exports = {
    addShipper,
    getAllShippers,
    updateShipper,
};
