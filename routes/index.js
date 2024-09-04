const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middleware/isLoggedIn");
const Product = require("../models/product.model");
const User = require("../models/user.model");

router.get("/", (req, res) => {
    const error = req.flash("error");
    res.render("index", { error , loggedIn: false });
});

router.get("/shop", isLoggedIn, async(req, res) => {
    const products = await Product.find();
    const success = req.flash("success");
    res.render("shop", { products , success});
});

router.get("/cart", isLoggedIn, async(req, res) => {
    const user = await User.findOne({email:req.user.email}).populate("cart");
    const products = user.cart;
    let sum = 0;
    const totalBill = products.map((product) => {
        return (product.price + 20) - (product.discount);
    });

    for(let i = 0; i < totalBill.length; i++){
        sum += totalBill[i];
    }

    res.render("cart", { products , totalBill, sum });
});

router.get("/addToCart/:id", isLoggedIn, async(req, res) => {
    const user = await User.findOne({email:req.user.email});
    user.cart.push(req.params.id);
    await user.save();
    req.flash("success", "Product added to cart successfully");
    res.redirect("/shop");
});

router.get("/cart", isLoggedIn, (req, res) => {
    res.render("admin");
});

module.exports = router;