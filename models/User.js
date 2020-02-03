const mongoose = require("mongoose");

var userschema = new mongoose.Schema({
  userId: String,
  image: String,
  email: String,
  name: String
});

module.exports = mongoose.model("User", userschema);
