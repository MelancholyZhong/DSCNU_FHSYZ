const express = require("express");
const bodyParser = require("body-parser");
// const mongoUtil = require("./mongoUtil");
// const path = require("path");

const app = express();
const port = 3001;

// mongoUtil.connectToClient();

// app.use(express.static(path.join(__dirname, "frontend/build")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", res.send("Hello World!"));

//
app.listen(port, () => {
  console.log(`Server runing at port ${port}`);
});

module.exports = app;
