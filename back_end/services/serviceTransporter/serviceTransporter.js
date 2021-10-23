const { addOne, getAll, updateOne } = require('../../models/modelTransporter');
const { statusCode } = require('../../constants/statusCode');
const validations = require('./validationsTransporter');

const getAllTransporter = async () => {
    const result = await getAll();
    
    return {
        code: statusCode.STATUS_OK,
        message: result,
    };
};

const addTransporter = async (Transporter) => {
    const bodyIsValid = validations.validationBody(Transporter);
    const CNPJisValid = validations.validationCNPJ(Transporter);

    if (bodyIsValid || CNPJisValid) {
        return bodyIsValid || CNPJisValid;
    }

    const allTransporter = await getAll();

    const result = await addOne({
        _id: allTransporter.length + 1,
        ...Transporter,
    });

    return {
        code: statusCode.CREATED,
        message: result,
    };
};

const updateTransporter = async (id, Transporter) => {
    const bodyIsValid = validations.validationBody(Transporter);
    const CNPJisValid = validations.validationCNPJ(Transporter);

    if (bodyIsValid || CNPJisValid) {
        return bodyIsValid || CNPJisValid;
    }

    const result = await updateOne(id, Transporter);
    return {
        code: statusCode.STATUS_OK,
        message: result,
    };
};

module.exports = {
    addTransporter,
    getAllTransporter,
    updateTransporter,
};
