require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
const connectDB = require("./config/db");
connectDB();

const route = require("./routes/orderRoutes");

app.use("/api/order", route);

app.listen(process.env.PORT, () => {
  console.log("server running in port " + process.env.PORT);
});
