const { code, numbers } = require('../../utils/code');

const validationBody = (shipper) => {
    const { name, doc, about, site } = shipper;
    if (name === '' || doc === '' || about === '' || site === '') {
        return {
            code: code.BAD_REQUEST,
            message: 'All fields must be filled.',
        };
    }
};

const validationCNPJ = (shipper) => {
    const { doc } = shipper;
    if (doc.length !== numbers.NUMBER_EIGHTEEN) {
        return {
            code: code.BAD_REQUEST,
            message: 'CNPJ inválido.',
        };
    }
};

module.exports = {
    validationBody,
    validationCNPJ,
};
