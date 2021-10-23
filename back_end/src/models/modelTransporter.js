const connection = require('./connection');

const TABLE = 'transporter';
const format = (data) => data.map((elem) => {
    const { _id, ...rest } = elem;
    return { id: _id, ...rest };
});

const getAll = async () => {
    const result = await connection()
        .then((db) => db.collection(TABLE).find({}).toArray())
        .then(format)
        .catch((err) => {
            console.log('getTransporter:', err.messsage);
            return [];
        });

    return result;
};

const addOne = async (shipper) => {
    const result = await connection()
        .then((db) => db.collection(TABLE).insertOne(shipper))
        .catch((err) => {
            console.log('addTransporter:', err.message);
            return [];
        });
    return result;
};

const updateOne = async (id, shipper) => {
    const { name, doc, about, active, site } = shipper;
    const result = await connection()
        .then((db) => db.collection(TABLE).updateOne({ id: +id }, {
            $set: {
                name,
                doc,
                active,
                about,
                site,
            },
        }))
        .catch((err) => console.log('updateTransporter:', err.message));
    return result;
};

const deleteOne = async (id) => {
    const result = await connection()
        .then((db) => db.collection(TABLE).updateOne({ id }))
        .catch((err) => console.log('deleteTransporter:', err.message));
    return result;
};

module.exports = {
    addOne,
    getAll,
    updateOne,
    deleteOne,
};