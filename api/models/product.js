const mongoose = require("mongoose");

// It is mongoose schema, which is used to make design for data that stores in DB
const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
});

module.exports = mongoose.model("Product", productSchema);
