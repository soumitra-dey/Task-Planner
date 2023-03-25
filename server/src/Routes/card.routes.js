const express = require("express");
const {
  deletecard,
  getallcard,
  createcard,
} = require("../Controllers/cardControllers");

const app = express.Router();

app.post("/create", createcard);

app.get("/getallcard", getallcard);

app.delete("/deletecard", deletecard);

module.exports = app;
