const connection = require('./connection');

const TRANSPORTER = 'transporter';
const formater = (data) => data.map((elem) => {
    const { _id, ...rest } = elem;
    return rest;
});

const getAllTransporters = async () => {
    const db = await connection();

    try {
        const result = await db.collection(TRANSPORTER).find({}).toArray();
        const format = formater(result);

        return format;
    } catch (err) {
        console.error(err);
        return null;
    }
};

const createTransporte = async (shipper) => {
    const db = await connection();
    try {
        const result = await db.collection(TRANSPORTER).insertOne(shipper);
        return result;
    } catch (err) {
        console.error(err);
        return null;
    }
};

const updateTransporter = async (id, shipper) => {
    const { name, doc, about, active, site } = shipper;
    const db = await connection();

    try {
        const result = await db.collection(TRANSPORTER).updateOne({ id: +id }, {
            $set: {
                name,
                doc,
                active,
                about,
                site,
            },
        });
        return result;
    } catch (err) {
        console.error(err);
        return null;
    }
};

const deleteTransporter = async (id) => {
    const db = await connection();

    try {
        const result = db.collection(TRANSPORTER).deleteOne({ id });
        return result;
    } catch (err) {
        console.error(err);
        return null;
    }
};

module.exports = {
    createTransporte,
    getAllTransporters,
    updateTransporter,
    deleteTransporter,
};