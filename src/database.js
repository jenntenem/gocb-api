const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI || "mongodb://localhost/mean-crud";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then((db) => console.log("db is connected"))
  .catch((err) => console.error(err));

module.exports = mongoose;
