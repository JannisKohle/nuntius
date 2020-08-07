const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    "text": {},
    "writer": {},
    "image": {},
    "likes": {},
    "replies": {}
});

module.exports = mongoose.model("Post", PostSchema);
