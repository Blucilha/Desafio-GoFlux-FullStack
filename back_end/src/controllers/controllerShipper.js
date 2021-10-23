const serviceShipper = require('../services/serviceShipper/serviceShipper');

const getAll = async (_req, res) => {
    const result = await serviceShipper.getAllShippers();
    const { code, message } = result;

    res.status(code).json(message);
};

const addOne = async (req, res) => {
    const { body } = req;

    const result = await serviceShipper.addShipper(body);
    const { code, message } = result;

    res.status(code).json(message);
};

const updateOne = async (req, res) => {
    const { params, body } = req;

    const result = await serviceShipper.updateShipper(params.id, body);
    const { code, message } = result;

    res.status(code).json(message);
};

module.exports = {
    getAll,
    addOne,
    updateOne,
};
