const mongoose = require('mongoose');

const userSettings = require("./userSettings");

const AccountSchema = mongoose.Schema({
    "username": {type: String, required: true},
    "realname": {type: String, required: true},
    "picture": {type: String, default: "images.nuntius.yzx/839tngq39qu.png"},
    "email": {type: String, required: false},
    "followers": {type: Array, default: []},
    "following": {type: Array, default: []},
    "likedPosts": {type: Array, default: []},
    "likedReplies": {type: Array, default: []},
    "posts": {type: Array, default: []},
    "replies": {type: Array, default: []},
    "userSettings": userSettings
});

module.exports = mongoose.model("Account", AccountSchema, "accounts");
