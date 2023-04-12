const mongoose = require("mongoose");
const MenuSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  avaialability: {
    type: Boolean,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  ingredients: {
    type: String,
  },
  type: {
    type: String,
  },
});
module.exports = mongoose.model("Menu", MenuSchema);
