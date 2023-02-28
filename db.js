const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/qnPaperGenaration-db"
  //  () => {
  //   console.log("connected to db");
  // }
  //note for this version of mongodb (6.0.4) it wont accept function above function
);

module.exports = mongoose;
