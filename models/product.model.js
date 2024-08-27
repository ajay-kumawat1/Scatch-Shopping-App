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
    image: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanlasPgQjfGGU6anray6qKVVH-ZlTqmuTHw&s"
    },
});

module.exports = mongoose.model("Product", productSchema);