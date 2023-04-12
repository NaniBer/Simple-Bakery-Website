const express = require("express");
const router = express.Router();
const Menu = require("../models/menu");
const Order = require("../models/order");

//GET ALL ORDERS
router.get("/orders", async (req, res) => {
  try {
    const order = await Order.find();
    res.json(order);
  } catch (err) {
    res.json({ message: err });
  }
});

// //GET A SPECIFIC ORDER
router.get("/orders/:orderId", async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    res.json(order);
  } catch (err) {
    res.json({ message: err });
  }
});

//DELETE AN ORDER
router.delete("/orders/:orderId", async (req, res) => {
  try {
    const deletedOrder = await Menu.remove({ _id: req.params.orderId });
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

//ADD A MENU
router.post("/", async (req, res) => {
  const menu = new Menu({
    name: req.body.name,
    avaialability: req.body.avaialability,
    price: req.body.price,
    description: req.body.description,
    ingredients: req.body.ingredients,
    type: req.body.type,
  });
  try {
    const newMenu = await menu.save();
    res.json(newMenu);
  } catch (err) {
    res.json({ message: err });
  }
});

//EDIT A MENU
router.patch("/:menuId", async (req, res) => {
  try {
    const updatedMenu = await Menu.updateOne(
      { _id: req.params.menuId },
      { $set: { name: req.body.name } }
    );
    res.json(updatedMenu);
  } catch (err) {
    res.json({ message: err });
  }
});

//DELETE A MENU
router.delete("/:menuId", async (req, res) => {
  try {
    const deletedMenu = await Menu.remove({ _id: req.params.menuId });
    res.json(deletedMenu);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
