const connection = require('./connection');

const SHIPPER = 'shippers';

const getAllShippers = async () => {
    const db = await connection();

    try {
        const result = await db.collection(SHIPPER).find({}).toArray();
        const format = result.map((element) => {
            const { _id, ...rest } = element;
            return rest;
        });

        return format;
    } catch (err) {
        console.error(err);
        return null;
    }
};

const getAllShipperById = async (doc) => {
    const db = await connection();

    try {
        const result = await db.collection(SHIPPER).find({ doc }).toArray();
        const format = result.map((element) => {
            const { _id, ...rest } = element;
            return rest;
        });

        return format;
    } catch (err) {
        console.error(err);
        return null;
    }
};

const createShipper = async (shipper) => {
    const db = await connection();

    try {
        const result = await db.collection(SHIPPER).insertOne(shipper);

        return result;
    } catch (err) {
        console.error(err);
        return null;
    }
};

const updateShipper = async (id, shipper) => {
    const { name, doc, about, active, site } = shipper;
    const db = await connection();

    try {
        const result = await db.collection(SHIPPER).updateOne({ id }, {
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

const deleteShipper = async (id) => {
    const db = await connection();

    try {
        const result = db.collection(SHIPPER).deleteOne({ id });
        return result;
    } catch (err) {
        console.error(err);
        return null;
    }
};

module.exports = {
    createShipper,
    getAllShippers,
    updateShipper,
    deleteShipper,
    getAllShipperById,
};