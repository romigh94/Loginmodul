const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginmodulSchema = new Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String
});

const Loginmodul = mongoose.model('my-app', loginmodulSchema)
module.exports = Loginmodul;

