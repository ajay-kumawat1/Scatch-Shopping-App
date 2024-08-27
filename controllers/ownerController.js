const Owner = require("../models/owner.model");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res) => {
    try {
        const owners = await Owner.find()
        if(owners.length > 0) {
            return res.status(403).send("You don't have permission to create owner");
        }
        const {fullName, email, password, gstIn} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const ownerCreated = await Owner.create({
            fullName,
            email,
            password: hashedPassword,
            gstIn
        });

        return res.status(201).send(ownerCreated);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}