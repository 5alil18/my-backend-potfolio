const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database connected successfuly");
  } catch (e) {
    console.log("connection failed", e);
    process.exit(1);
  }
};

module.exports = connectDB;
