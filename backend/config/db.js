const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/daily_shop", {
      dbName: "ecommerce",
    });
    if (process.env.NODE_ENV !== "test") {
      console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    }
  } catch (error) {
    if (process.env.NODE_ENV !== "test") {
      console.error(`Error ${error}`.red.underline.bold);
    }
    process.exit(1);
  }
};

module.exports = connectDB;
