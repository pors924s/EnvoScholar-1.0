const mongoose = require("mongoose");

var feedBackSchema = new mongoose.Schema({
  question1: {
    type: String
  },
  question2: {
    type: String
  }
});

mongoose.model("Feedback", feedBackSchema, "feedbacks");
