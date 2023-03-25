const express = require("express");
const { createlabel, getalllabel } = require("../Controllers/labelController");

const app = express.Router();

app.post("/create",createlabel)

app.get("/getalllabel",getalllabel)

module.exports = app;