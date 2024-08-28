const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    discount: {
        type: Number,
        default: 0
    },
    bgColor: {
        type: String,
        default: "#000"
    },
    panelColor: {
        type: String,
        default: "#000"
    },
    textColor: {
        type: String,
        default: "#000"
    },
    image: Buffer,
});

module.exports = mongoose.model("Product", productSchema);