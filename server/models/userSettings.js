const mongoose = require('mongoose');

const settingsSchema = mongoose.Schema({
    "theme": {type: String, default: "dark"},
    "notificationType": {type: String, default: null},
    "notifications": {type: Array, default: ["replies", "mentioned"]}
});

module.exports = settingsSchema;
