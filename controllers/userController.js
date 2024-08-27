const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");
const debug = require("debug")("development:userController");

module.exports.register = async (req, res) => {
    try {
        const { fullName, email, password, contact } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const userCreated = await User.create({
            fullName,
            email,
            password: hashedPassword,
            contact
        });

        const token = generateToken(userCreated);
        res.cookie("token", token);
        
        return res.status(201).send(userCreated);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(404).send("You are not registered");
        }

        if(!await bcrypt.compare(password, user.password)) {
            return res.status(400).send("Invalid credentials");
        }
        const token = generateToken(user);
        res.cookie("token", token);
        return res.status(200).json({user: user, msg: "You are logged in"});

    } catch (error) {
        return res.status(500).send(error.message);
    }
}