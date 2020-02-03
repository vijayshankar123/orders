const mongoose = require("mongoose");

ProductSchema = new mongoose.Schema({
  id: {
    type: String
  },
  customer_name: {
    type: String
  },
  customer_email: {
    type: String
  },
  product: {
    type: String
  },
  quantity: {
    type: Number
  }
});

module.exports = mongoose.model("Product", ProductSchema, "DummyData");
