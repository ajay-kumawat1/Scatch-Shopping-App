const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middleware/isLoggedIn");
const Product = require("../models/product.model");

router.get("/", (req, res) => {
    const error = req.flash("error");
    res.render("index", {error});
});

router.get("/shop", isLoggedIn, async(_req, res) => {
    const products = await Product.find();
    res.render("shop", { products });
});

router.get("/cart", isLoggedIn, (_req, res) => {
    res.render("admin");
});

module.exports = router;