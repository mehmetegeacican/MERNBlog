
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

module.exports = {
    signupUser,
    loginUser
}