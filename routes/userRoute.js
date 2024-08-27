const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/userController");

router.post("/create", register);
router.post("/login", login);
router.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.redirect("/");
})

module.exports = router;