const app = require("./app");

app.listen(app.get("port"));
console.log("App is listening on port " + app.get("port"));