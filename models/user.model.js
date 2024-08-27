const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    cart : {
        type : Array,
        default : []
    },
    isAdmin : {
        type : Boolean,
        default : false
    },
    order: {
        type: Array,
        default: []
    },
    contact: {
        type: String,
        required: [true, "Contact is required"]
    },
    picture: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanlasPgQjfGGU6anray6qKVVH-ZlTqmuTHw&s"
    }
});

module.exports = mongoose.model("User", userSchema);