const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const Product = require("../models/product.model");

router.post("/create", upload.single('image'), async (req, res) => {
    try {
        const { name, price, discount, bgColor, panelColor, textColor } = req.body;
        const product = await Product.create({
            name,
            price,
            discount,
            bgColor,
            panelColor,
            textColor,
            image: req.file.buffer
        });
        req.flash("success", "Product created successfully");
        res.redirect("/products/create");
        
    } catch (error) {
        req.flash("error", error.message);
        res.redirect("/products/create");
    }
})

module.exports = router;