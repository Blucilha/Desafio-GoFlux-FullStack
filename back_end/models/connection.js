const { MongoClient } = require('mongodb');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const MONGO_DB_URL = 'mongodb://localhost:27017';
let db = null;
const DB_NAME = 'GoFlux';

const connection = () => (db
            ? Promise.resolve(db)
            : MongoClient.connect(MONGO_DB_URL, OPTIONS)
                .then((con) => {
                    db = con.db(DB_NAME);
                    return db;
                }));

module.exports = connection;
