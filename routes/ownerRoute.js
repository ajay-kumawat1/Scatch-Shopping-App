const express = require("express");
const router = express.Router();
const Owner = require("../models/owner.model");

if(process.env.NODE_ENV === "development") {
    router.post("/create", async(req, res) => {
        const owners = await Owner.find()
        if(owners.length > 0) {
            return res.status(403).send("You don't have permission to create owner");
        }
        const {fullName, email, password, gstIn} = req.body;

        const ownerCreated = await Owner.create({
            fullName,
            email,
            password,
            gstIn
        });
        return res.status(201).send(ownerCreated);
    })
}

router.get("/", (req, res) => {
    res.send("testing owner route");
})

module.exports = router;