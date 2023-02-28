const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

require("./db");

app.use("/users", require("./src/controller/user-controller"));
const port = 4000;
app.listen(port, () => {
  console.log("server started at port 4000");
});
