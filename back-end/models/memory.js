const mongoose = require('mongoose');

const memorySchema = mongoose.Schema({
    title: { type: String, require: true, allowNull: false },
    date: { type: String, require: true },
    desc: { type: String, require: false },
    emoji: { type: String, require: false },
    tags: { type: Array, require: false, allowNull: true },
    date: { type: Object, require: true, allowNull: false },
    week: { type: Number, require: true, allowNull: false }
});


module.exports = mongoose.model('memories',  memorySchema);