const mongoose = require('mongoose');

const userSettings = require("./userSettings");

const AccountSchema = mongoose.Schema({
    "username": {type: String, required: true},
    "realname": {type: String, required: true},
    "picture": {type: String, default: "images.nuntius.yzx/839tngq39qu.png"},
    "email": {type: String, required: false},
    "password": {type: String, required: true},
    "followersNum": {type: Number, default: 0},
    "followingNum": {type: Number, default: 0},
    "likedPostsNum": {type: Number, default: 0},
    "likedRepliesNum": {type: Number, default: 0},
    "postsNum": {type: Number, default: 0},
    "repliesNum": {type: Number, default: 0},
    "followers": {type: Array, default: []},
    "following": {type: Array, default: []},
    "likedPosts": {type: Array, default: []},
    "likedReplies": {type: Array, default: []},
    "posts": {type: Array, default: []},
    "replies": {type: Array, default: []},
    "userSettings": userSettings
});

const Account = mongoose.model("Account", AccountSchema, "accounts");

async function getAccounts() {
    const accounts = await Account.find().select("-email -password").exec();

    return accounts;
}

async function getAllUsernames() {
    const usernames = await Account.find().select("username").exec();

    const result = [];

    usernames.forEach((obj, index) => {
        result.push(obj.username);
    });

    return result;
}

async function createAccount(username, realname, picture, email, password) {
    allUsernames = await getAllUsernames();

    if (allUsernames.indexOf(username) === -1) {
        const account = new Account({
            "username": username,
            "realname": realname,
            "picture": picture,
            "email": email,
            "password": password
        });

        const result = await account.save();
        return result;
    } else {
        return "error"
    }
}

async function deleteAccount(username) {
    const account = await Account.deleteOne({ "username": username }, (err) => {});

    return account;
}

module.exports = { Account, getAccounts, createAccount, deleteAccount }
