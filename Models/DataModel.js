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
});

const dataSchema = mongoose.Schema({
    "id": {
        type: Number,
        required: true
    },
    "image": {
        type: String,
        required: true
    },
    "pname": {
        type: String,
        required: true
    },
    "category": {
        type: String,
        required: true
    },
    "brand": {
        type: String,
        required: true
    },
    "model": {
        type: String,
        required: false
    },
    "originalPrice": {
        type: Number,
        required: true
    },
    "offerPrice": {
        type: Number,
        required: true
    },
    "descript1": {
        type: String,
        required: true
    },
    "descript2": {
        type: String,
        required: true
    },
    "descript3": {
        type: String,
        required: true
    },
    "descript4": {
        type: String,
        required: true
    },
    "descript5": {
        type: String,
        required: true
    }
})

const useraccounts = mongoose.model("useraccounts", userSchema);
const productDatas = mongoose.model("productDatas", dataSchema);
module.exports = { useraccounts, productDatas };