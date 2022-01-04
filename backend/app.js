const morgan = require("morgan");
const path = require("path");
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
//const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
connectDB();

const app = express();

//Use morgan to detect http request
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Main Routes
app.use("/api/products", productRoutes);
app.use("/api/user", userRoutes);


//Parse json data
app.use(express.json());

module.exports = app;
