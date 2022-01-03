const morgan = require("morgan");
const path = require("path");
const express = require("express");

//const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
connectDB();

const app = express();

//Use morgan to detect http request
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Parse json data
app.use(express.json());

module.exports = app;
