const rescue = require('express-rescue');
const transporterService = require('../services/transporterService');
const success = require('../utils/success');

const getAllTransporters = rescue(async (_req, res) => {
    const result = await transporterService.getAllTransporters();

    res.status(success.OK).json({ message: result });
});

const getAllTransporterByDoc = rescue(async (req, res) => {
    const { doc } = req.body;

    const result = await transporterService.getAllTransporterByDoc(doc);

    res.status(success.OK).json({ message: result[0] });
});

const createTransporter = rescue(async (req, res) => {
    const { body } = req;

    const result = await transporterService.createTransporter(body);

    res.status(success.OK).json({ message: result });
});

const updateTransporter = rescue(async (req, res) => {
    const { params, body } = req;
    const result = await transporterService.updateTransporter(params.id, body);

    res.status(success.OK).json({ message: result });
});

module.exports = {
    getAllTransporters,
    createTransporter,
    updateTransporter,
    getAllTransporterByDoc,
};