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

const getAllTransporterByDoc = async (doc) => {
    const db = await connection();

    try {
        const result = await db.collection(TRANSPORTER).find({ doc }).toArray();
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

const createTransporter = async (transporter) => {
    const db = await connection();
    try {
        const result = await db.collection(TRANSPORTER).insertOne(transporter);
        return result;
    } catch (err) {
        console.error(err);
        return null;
    }
};

const updateTransporter = async (id, transporter) => {
    const { name, doc, about, active, site } = transporter;
    const db = await connection();

    try {
        const result = await db.collection(TRANSPORTER).updateOne({ id }, {
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
    createTransporter,
    getAllTransporters,
    updateTransporter,
    deleteTransporter,
    getAllTransporterByDoc,
};