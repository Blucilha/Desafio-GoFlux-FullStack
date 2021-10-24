/* eslint-disable camelcase */
const connection = require('./connection');

const OFFER = 'offers';
const formater = (data) => data.map((elem) => {
    const { _id, ...rest } = elem;
    return rest;
});

const getAllOffers = async () => {
    const db = await connection();
    try {
        const result = await db.collection(OFFER).find({}).toArray();
        const format = formater(result);
        return format;
    } catch (err) {
        console.error(err);
        return null;
    }
};

const getOffersById = async (id) => {
    const db = await connection();
    try {
        const result = await db.collection(OFFER).find({ id_customer: id }).toArray();
        const format = formater(result);
        return format;
    } catch (err) {
        console.error(err);
        return null;
    }
};

const createOffer = async (offer) => {
    const db = connection();
    try {
        const result = db.collection(OFFER).insertOne(offer);
        return result;
    } catch (err) {
        console.error(err);
        return null;
    }
};

const deleteOffer = async (id) => {
    const db = await connection();
    try {
        const result = db.collection(OFFER).deleteOne({ id });
        return result;
    } catch (err) {
        console.error(err);
        return null;
    }
};

module.exports = {
    getAllOffers,
    getOffersById,
    createOffer,
    deleteOffer,
};