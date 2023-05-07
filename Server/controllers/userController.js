
const User = require('../models/userModel');

/**
 * Login Controller
 * @param {*} req 
 * @param {*} res 
 */
const loginUser = async (req,res) => {
    res.json({msg:"Login"});
}
/**
 * Sign Up 
 * @param {*} req 
 * @param {*} res 
 */
const signupUser = async (req,res) => {
    res.json({msg:"SignUp"});
}

module.exports = {
    signupUser,
    loginUser
}