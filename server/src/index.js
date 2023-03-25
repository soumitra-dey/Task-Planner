const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userRouter = require("./Routes/user.routes");
const boardRouter = require("./Routes/board.routes");
const cardRouter = require("./Routes/card.routes");
const labelRouter = require("./Routes/label.routes");
const connect = require("./Config/Connect");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
app.use("/board", boardRouter);
app.use("/card", cardRouter);
app.use("/label", labelRouter);

app.get("/", (req, res) => {
  res.send("Api running well...");
});

app.listen(process.env.PORT, async() => {
    await connect().then(() => {
        console.log(`listening to http://localhost:${process.env.PORT}`);
    });
});
