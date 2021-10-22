const { addOne, getAll, updateOne } = require('../../models/modelShippers');
const { statusCode } = require('../../constants/statusCode');

const getAllShippers = async () => {
    const result = await getAll();
    return {
        code: statusCode.STATUS_OK,
        message: result,
    };
};

const addShipper = async (shipper) => {
    const allShippers = await getAll();

    const result = await addOne({
        _id: allShippers.length + 1,
        ...shipper,
    });

    return {
        code: statusCode.STATUS_OK,
        message: result,
    };
};

const updateShipper = async (id, shipper) => {
    const result = await updateOne(+id, shipper);
    return {
        code: statusCode.STATUS_OK,
        message: result,
    };
};

module.exports = {
    addShipper,
    getAllShippers,
    updateShipper,
};
