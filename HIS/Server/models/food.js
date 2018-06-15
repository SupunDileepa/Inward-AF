const mongoose = require("mongoose");

const FoodSchema = mongoose.Schema({
  imagePath: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Food", FoodSchema);
