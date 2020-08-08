const mongoose = require('mongoose');

const ReplySchema = mongoose.Schema({
    "text": {type: String, required: true},
    "writer": mongoose.ObjectId,
    "likes": {type: Array, default: []}
});

module.exports = mongoose.model("Reply", AccountSchema, "replies");
