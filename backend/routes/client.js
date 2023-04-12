const express = require("express");
const router = express.Router();
const Menu = require("../models/menu");
const Order = require("../models/order");

//GET ALL ORDERS
router.get("/orders/:phoneNo", async (req, res) => {
  try {
    const orders = await Order.findOne({ phoneNo: req.params.phoneNo });
    res.json(orders);
  } catch (err) {
    res.json({ message: err });
  }
});

//ADD AN ORDER
router.post("/orders", async (req, res) => {
  const order = new Order({
    nameOfOrder: req.body.nameOfOrder,
    phoneNo: req.body.phoneNo,
    remarks: req.body.remarks,
  });
  try {
    const newOrder = await order.save();
    res.json(newOrder);
  } catch (err) {
    res.json({ message: err });
  }
});

//DELETE AN ORDER
router.delete("/orders/:orderId", async (req, res) => {
  try {
    const deletedOrder = await Order.remove({ _id: req.params.orderId });
    res.json(deletedOrder);
  } catch (err) {
    res.json({ message: err });
  }
});

//GET  ALL THE MENU
router.get("/", async (req, res) => {
  try {
    const menu = await Menu.find();
    res.json(menu);
  } catch (err) {
    res.json({ message: err });
  }
});

//GET A SPECIFIC MENU
router.get("/:menuId", async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.menuId);
    res.json(menu);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
