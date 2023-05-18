const express = require("express");
const morgan = require("morgan");

const app = express();

app.set("port", process.env.PORT || 8000);
app.use(morgan("dev"));
// app.use(require("./routes/products.routes"));

module.exports = app;
