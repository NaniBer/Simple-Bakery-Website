const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 3000;
require("dotenv/config");

const app = express();

//Middleares
app.use(bodyParser.json());
app.use(cors());

//Import Routes
const adminRoutes = require("./routes/admin");
const clientRoutes = require("./routes/client");
app.use("/admin", adminRoutes);
app.use("/", clientRoutes);

app.get("/", (req, res) => {
  res.send("This is get");
});

//Connect to Db
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("Connected to db")
);

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
