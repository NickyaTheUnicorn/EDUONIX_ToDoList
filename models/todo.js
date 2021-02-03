// Renner Yannick
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userModel = require('./user');

const todoSchema = new Schema({
    title: {type: String, required: true, max: 255},
    dueBy: {type: String, required: true},
    createdOn: {type: Date, required: true},
    status: {type: String, required: true},
    active: {type: Boolean, required: true},
    userName: {type: String, required: false}
});

module.exports = mongoose.model('todo', todoSchema);