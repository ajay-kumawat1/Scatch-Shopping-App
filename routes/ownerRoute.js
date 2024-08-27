const express = require("express");
const router = express.Router();
const { register } = require("../controllers/ownerController");

if(process.env.NODE_ENV === "development") {
    router.post("/create", register);
}

module.exports = router;