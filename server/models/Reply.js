const mongoose = require('mongoose');

const AccountSchema = mongoose.Schema({
    "text": {},
    "writer": {},
    "likes": {}
});

module.exports = mongoose.model("Account", AccountSchema);
