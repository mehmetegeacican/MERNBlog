
const User = require('../models/userModel');

/**
 * Login Controller
 * @param {*} req 
 * @param {*} res 
 */
const loginUser = async (req, res) => {
    res.json({ msg: "Login" });
}
/**
 * Sign Up 
 * @param {*} req 
 * @param {*} res 
 */
const signupUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.signup(email, password);
        res.status(201).json({ email, user });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

/**
 * Delete account
 * @param {*} req 
 * @param {*} res 
 */
const deleteAccount = async (req, res) => {
    const  {email}  = req.query;
    try {
        const user = await User.deleteUser(email);
        res.status(200).json({ user });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    signupUser,
    loginUser,
    deleteAccount
}