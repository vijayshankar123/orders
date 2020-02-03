const express = require("express");
const uuid = require("uuid");
const Product = require("../models/Product");
const config = require("config");
const db = config.get("mongoURI");
const router = express.Router();

//get all products

router.get("/api/products", async (req, res) => {
  try {
    const product = await Product.find().limit(100);
    if (!product) {
      return res.status(404).json({ msg: "product not found" });
    }
    res.json(product);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

// add new product

router.post("/api/products", async (req, res) => {
  const { customer_name, customer_email, product, quantity } = req.body;
  const id = uuid.v4();
  try {
    var products = await new Product({
      customer_name,
      customer_email,
      product,
      quantity,
      id
    });
    await products.save();
    res.json(products);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

//delete using id
router.delete("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: "product not found" });
    }
    await product.remove();
    res.json({ msg: "product removed" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server");
  }
});

module.exports = router;
