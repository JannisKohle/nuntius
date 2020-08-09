const mongoose = require('mongoose');

const ReplySchema = mongoose.Schema({
    "text": {type: String, required: true},
    "writer": mongoose.ObjectId,
    "likesNum": {type: Number, default: 0},
    "likes": {type: Array, default: []}
});

module.exports = mongoose.model("Reply", AccountSchema, "replies");
