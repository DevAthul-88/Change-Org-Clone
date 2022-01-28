require("dotenv").config();
const express = require("express");
const app = express();
const userRoute = require("./routes/userRoute");
const mongoose = require("mongoose");

app.use(express.json());

app.use("/api/user", userRoute);

const port = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URL, (err) => {
  if (err) {
    console.log("Error connecting to MongoDB");
    process.exit(1);
  }
  console.log("Connection established");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
