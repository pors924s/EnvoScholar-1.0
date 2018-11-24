const mongoose = require("mongoose");

//Connecting to the database
mongoose.connect(
  process.env.MONGODB_URI,
  err => {
    if (!err) {
      console.log("Mongodb connection succeeded");
    } else {
      console.log(
        "Error. Mongodb connection failed: " + JSON.stringify(err, undefined, 2)
      );
    }
  }
);

require("./user.model");
