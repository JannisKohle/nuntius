const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    "text": {type: String, required: true},
    "writer": mongoose.ObjectId,
    "image": {type: String, default: null},
    "likes": {type: Array, default: []},
    "replies": {type: Array, default: []}
});

module.exports = mongoose.model("Post", PostSchema, "posts");
