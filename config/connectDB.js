const mongoose = require("mongoose");

const connectMongo = async () => {
    mongoose.set("strictQuery", false);
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("database connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectMongo