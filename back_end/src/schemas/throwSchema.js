/* eslint-disable camelcase */
const Joi = require('joi');

const REGEX_ID = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
const REGEX_VALUE = /^([0-9]*).([0-9]{2})/;

const createThrow = Joi.object({
    id_provider: Joi.string().pattern(REGEX_ID).required(),
    id_offer: Joi.string().pattern(REGEX_ID).required(),
    value: Joi.string().pattern(REGEX_VALUE).required,
    amount: Joi.string().pattern(REGEX_VALUE).required,
}).required();

module.exports = {
    createThrow,
};