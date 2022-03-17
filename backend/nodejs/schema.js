const mongoose = require('mongoose');

const userSchema = {
    firstname: String,
    lastname: String,
    email: String,
    password: String
}

const User = mongoose.model("User", userSchema);
module.exports = User