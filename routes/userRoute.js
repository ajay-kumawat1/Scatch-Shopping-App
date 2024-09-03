const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/userController");
const { isLoggedIn } = require("../middleware/isLoggedIn");

router.post("/create", register);

router.post("/login", login);

router.get("/logout", isLoggedIn, (req, res) => {
    res.clearCookie("token");
    res.redirect("/");
})

module.exports = router;