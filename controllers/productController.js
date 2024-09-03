const Product = require("../models/product.model");

module.exports.create = async (req, res) => {
    try {
        const { name, price, discount, bgColor, panelColor, textColor } = req.body;
        await Product.create({
            name,
            price,
            discount,
            bgColor,
            panelColor,
            textColor,
            image: req.file.buffer
        });
        
        req.flash("success", "Product created successfully");
        res.redirect("/owners/admin");
        
    } catch (error) {
        req.flash("error", error.message);
        res.redirect("/owners/admin");
    }
}