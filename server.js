require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.send({ message: "Welcome to the api" });
});

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on ${process.env.APP_PORT}`);
});
