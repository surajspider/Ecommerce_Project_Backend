const clouddb = "mongodb+srv://ramsuraj14:surajMongodb@cluster0.dorkulg.mongodb.net/Ecommerce_web?retryWrites=true&w=majority";
const mongoose = require("mongoose");
mongoose.set("strictQuery", true)

const connection = async () => {
    try {
        await mongoose.connect(clouddb);
        console.log("connection made successfully");
    }
    catch (err) {
        console.log("Error Occurred during db connection", err);
    }
}

module.exports = connection;