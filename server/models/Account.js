const mongoose = require('mongoose');

const AccountSchema = mongoose.Schema({
    "username": {},
    "realname": {},
    "picture": {},
    "email": {},
    "followers": {},
    "following": {},
    "likedPosts": {},
    "likedReplies": {},
    "posts": {},
    "replies": {},
    "userSettings": {}
});

module.exports = mongoose.model("Account", AccountSchema);
