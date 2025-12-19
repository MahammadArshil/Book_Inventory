const mongoose = require("mongoose");
const MONGO_URI = "mongodb://localhost:27017/school-inventory";

function connectDB() {
    mongoose
        .connect(MONGO_URI)
        .then(() => {
            console.log("Connected to DB.");
        })
        .catch((error) => {
            console.log(`Error :${error}`);
        })
}

module.exports = connectDB;
