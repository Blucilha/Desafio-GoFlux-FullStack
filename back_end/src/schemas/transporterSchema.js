const Joi = require('joi');

const REGEX_CNPJ = /^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2})$/;
const REGEX_URL = /^(https?:\/\/)?[0-9a-zA-Z]+\.[-_0-9a-zA-Z]+\.[0-9a-zA-Z]+$/;
const REGEX_ID = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

const createTransporter = Joi.object({
    id: Joi.string().pattern(REGEX_ID).required(),
    name: Joi.string().min(1).required(),
    doc: Joi.string().pattern(REGEX_CNPJ).required(),
    about: Joi.string().min(1).required(),
    active: Joi.boolean().required(),
    site: Joi.string().pattern(REGEX_URL).required(),
}).required();

module.exports = {
    createTransporter,
};