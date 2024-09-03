const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

module.exports.isLoggedIn = async (req, res, next) => {
    if(!req.cookies.token) {
        req.flash("error", "You are not logged in");
        return res.redirect("/");
    }

    try {
        const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
        const user = await User.findOne({email: decoded.email}).select("-password");

        req.user = user;
        next();
    } catch (error) {
        req.flash("error", "You are not logged in");
        res.redirect("/");
    }
}