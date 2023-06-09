const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// Settings
app.set("port", process.env.PORT || 8000);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/products", require("./routes/products.routes"));
app.use("/api/clients", require("./routes/clients.routes"));
app.use("/api/rols", require("./routes/rol.routes"));
app.use("/api/users", require("./routes/users.routes"));


module.exports = app;
