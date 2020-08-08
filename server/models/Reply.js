const mongoose = require('mongoose');

const AccountSchema = mongoose.Schema({
    "text": {type: String, required: true},
    "writer": mongoose.ObjectId,
    "likes": {type: Array, default: []}
});

module.exports = mongoose.model("Account", AccountSchema);
