const connection = require('./connection');

const TABLE = 'offers';
const format = (data) => data.map((elem) => {
    const { _id, ...rest } = elem;
    return { id: _id, ...rest };
});

const getAll = async () => {
    const result = await connection()
        .then((db) => db.collection(TABLE).find({}).toArray())
        .then(format)
        .catch((err) => {
            console.log('getOffer:', err.messsage);
            return [];
        });

    return result;
};

const getAllById = async (id) => {
    const result = await connection()
        .then((db) => db.collection(TABLE).find({ id: +id }).toArray())
        .then(format)
        .catch((err) => {
            console.log('getOffer:', err.messsage);
            return [];
        });

    return result;
};

const addOne = async (offer) => {
    const result = await connection()
        .then((db) => db.collection(TABLE).insertOne(offer))
        .catch((err) => {
            console.log('addOffer:', err.message);
            return [];
        });
    return result;
};

const deleteOne = async (id) => {
    const result = await connection()
        .then((db) => db.collection(TABLE).updateOne({ id }))
        .catch((err) => console.log('deleteOffer:', err.message));
    return result;
};

module.exports = {
    addOne,
    getAll,
    deleteOne,
    getAllById,
};