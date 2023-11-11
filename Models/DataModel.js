const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    uname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    }
})

const userAccounts = mongoose.model("userAccounts", userSchema);
module.exports = userAccounts;