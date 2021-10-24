/* eslint-disable camelcase */
const Joi = require('joi');

const REGEX_ID = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
const REGEX_LOCAL = /^([A-Za-zÀ-ü]*)\s?([A-Za-zÀ-ü]*)?\s-\s[A-Z]{2}/;
const REGEX_VALUE = /^([0-9]*).([0-9]{2})/;

const createOffer = Joi.object({
    id: Joi.string().pattern(REGEX_ID).required(),
    id_costumer: Joi.string().min(1).required(),
    from: Joi.string().pattern(REGEX_LOCAL).required(),
    to: Joi.string().pattern(REGEX_LOCAL).required(),
    initial_value: Joi.string().pattern(REGEX_VALUE).required(),
    amount: Joi.string().pattern(REGEX_VALUE).required(),
    amount_type: Joi.string().min(1).required(),
}).required();

module.exports = {
    createOffer,
};
