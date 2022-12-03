const express = require("express");
const bodyParser = require("body-parser");
const mongoUtil = require("./mongoUtil");
// const path = require("path");

const app = express();
const port = 3001;

const infoRoutes = require("./routes/info-routes");

mongoUtil.connectToClient();

// app.use(express.static(path.join(__dirname, "frontend/build")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/info", infoRoutes);

app.listen(port, () => {
  console.log(`Server runing at port ${port}`);
});

module.exports = app;
