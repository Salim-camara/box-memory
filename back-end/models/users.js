const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const usersSchema = mongoose.Schema({
    pseudo: { type: String, require: true, unique: true },
    password: { type: String, require: true }
});

// Injection du plugin dans notre userSchema
usersSchema.plugin(uniqueValidator);

module.exports = mongoose.model('users',  usersSchema);