const mongoose = require('mongoose');

const memorySchema = mongoose.Schema({
    pseudo: { type: String, require: true, unique: true },
    password: { type: String, require: true }
});


module.exports = mongoose.model('memories',  memorySchema);