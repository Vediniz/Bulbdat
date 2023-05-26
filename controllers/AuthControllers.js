const { createSecretToken } = require("../config/SecretToken");
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

const loginController = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.send({
                message: "All fields are required",
                success: false,
            });
        }
        const user = await User.findOne({ username });
        if (!user) {
            return res.json({
                message: "Incorrect password or email.",
                success: false,
            });
        }
        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            return res.json({
                message: "Incorrect password or email.",
                success: false,
            });
        }
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res.status(201).send({
            message: "User logged in succesffully!",
            success: true,
        });
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

const signupController = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const existingUser = await User.findOne({ username }) || await User.findOne({email}); 
        if (existingUser) {
            return res.send({
                success: false,
                message: "User already exists",
            });
        }
        const user = await User.create({ username, password, email });
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res.status(201).send({
            data: user,
            message: "User signed in successfully",
            success: true,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

module.exports.loginController = loginController;
module.exports.signupController = signupController;
