const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://syedmusab742_db_user:LzjrI8qqqEuiphrb@cluster0.z6wnha6.mongodb.net/');
        console.log("Mongo DB Connected Successfully")
    }
    catch (err) {
        console.log("Mongo DB Connection Error: ", err);
    }
}

module.exports = connectDB;