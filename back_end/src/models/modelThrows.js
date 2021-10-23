/* eslint-disable camelcase */
const connection = require('./connection');

const TABLE = 'trhows';
const format = (data) => data.map((elem) => {
    const { _id, ...rest } = elem;
    return { ...rest };
});
const getAll = async () => {
    const result = await connection()
        .then((db) => db.collection(TABLE).find({}).toArray())
        .then(format)
        .catch((err) => {
            console.log('getTrhow:', err.messsage);
            return [];
        });

    return result;
};

const getAllById = async (id) => {
    const result = await connection()
        .then((db) => db.collection(TABLE).find({ id_provider: id }).toArray())
        .then(format)
        .catch((err) => {
            console.log('getTrhow:', err.messsage);
            return [];
        });

    return result;
};

const addOne = async (trhow) => {
    const result = await connection()
        .then((db) => db.collection(TABLE).insertOne(trhow))
        .catch((err) => {
            console.log('addTrhow:', err.message);
            return [];
        });
    return result;
};

const deleteOne = async (id) => {
    const result = await connection()
        .then((db) => db.collection(TABLE).updateOne({ id }))
        .catch((err) => console.log('deleteTrhow:', err.message));
    return result;
};

module.exports = {
    addOne,
    getAll,
    deleteOne,
    getAllById,
};