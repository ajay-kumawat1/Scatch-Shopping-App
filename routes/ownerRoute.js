const express = require("express");
const router = express.Router();
const { register } = require("../controllers/ownerController");

if(process.env.NODE_ENV === "development") {
    router.post("/create", register);
}

router.get("/admin", (req, res) => {
    const success = req.flash("success");
    res.render("createproducts", {success});
});

module.exports = router;