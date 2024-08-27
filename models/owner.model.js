const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "FullName is required"]
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
    gstIn: {
        type: String,
        required: [true, "GSTIN is required"]
    },
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Owner", ownerSchema);