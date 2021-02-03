// Renner Yannick
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    userId: {type: Number, required: true, unique: true, default:1}
});

module.exports = mongoose.model('user', userSchema);