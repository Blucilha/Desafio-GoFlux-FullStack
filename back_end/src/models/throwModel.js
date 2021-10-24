/* eslint-disable camelcase */
const connection = require('./connection');

const THROW = 'throws';
const formater = (data) => data.map((elem) => {
    const { _id, ...rest } = elem;
    return rest;
});

const getAllThrows = async () => {
    const db = await connection();
    try {
        const result = await db.collection(THROW).find({}).toArray();
        const format = formater(result);
        return format;
    } catch (err) {
        console.error(err);
        return null;
    }
};

const getAllThrowsById = async (id_provider) => {
    const db = await connection();
    try {
        const result = await db.collection(THROW).find({ id_provider }).toArray();
        const format = formater(result);
        return format;
    } catch (err) {
        console.error(err);
        return null;
    }
};

const createThrow = async (trhow) => {
    const db = await connection();
    try {
        const result = db.collection(THROW).insertOne(trhow);
        return result;
    } catch (err) {
        console.error(err);
        return null;
    }
};

const deleteThrow = async (id) => {
    const db = await connection();
    try {
        const result = db.collection(THROW).deleteOne({ id });
        return result;
    } catch (err) {
        console.error(err);
        return null;
    }
};

module.exports = {
    createThrow,
    getAllThrows,
    deleteThrow,
    getAllThrowsById,
};