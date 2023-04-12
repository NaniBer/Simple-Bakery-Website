const mongoose = require("mongoose");
const OrderSchema = mongoose.Schema({
  nameOfOrder: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  remarks: {
    type: String,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
