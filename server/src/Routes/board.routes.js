const express = require("express");
const {
  createboard,
  showboard,
  getallboard,
  deleteboard,
  getboard,
} = require("../Controllers/boardControllers");
const { userMiddleware } = require("../Middlewares/userMiddleware");

const app = express.Router();

app.post("/create", userMiddleware, createboard);

app.get("/show", showboard);

app.get("/getallboard", userMiddleware, getallboard);

app.delete("/deleteboard", deleteboard);

// app.get("/getboard", getboard);

module.exports = app;
