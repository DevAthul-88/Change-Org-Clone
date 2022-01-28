require("dotenv").config();
const express = require("express");
const app = express();
const userRoute = require("./routes/userRoute");

app.use(express.json());

app.use("/api/user", userRoute);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
