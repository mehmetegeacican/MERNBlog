const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
})


/**
 * Static function for sign Up
 * @param {string} email 
 * @param {*string} password 
 */
userSchema.statics.signup = async function (email, password) {
    //Step 1 -- Check if email exists, if it doesn't, return null value
    const exists = await this.findOne({ email });
    if (exists) {
        throw Error('Email already in use');
    }
    //step 2 -- Add salt and Hash
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    //Step 3 --> Create Document for the user
    const user = await this.create({ email, password: hash });
    return user;
}

module.exports = mongoose.model('User', userSchema);