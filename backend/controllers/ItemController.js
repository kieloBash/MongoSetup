const ItemModel = require("../model/ItemModel");

module.exports.getItems = async (req, res) => {
    const items = await ItemModel.find();
    res.send(items);
};
