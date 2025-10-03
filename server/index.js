const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/authRoute.js");

const mongo_url = process.env.MONGO_URL;
const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to TeamUp application." });
});

mongoose
  .connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error from MONGODB:", err);
    process.exit();
  });
app.listen(9090, () => {
  console.log(`Server listening on PORT 9090`);
});

app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);
// app.use("/workspace", authRoute);
