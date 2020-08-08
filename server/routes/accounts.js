const express = require('express');
const {parse, stringify} = require('flatted');
const router = express.Router();

const Account = require("../models/Account");

router.use(express.json());

router.get('/', (req, res) => {
    // Get a list of all accounts

    const posts = Account.find({});
    res.send(stringify(posts));
});
router.post('/', (req, res) => {
    res.send("Create a new account");
});
router.delete('/', (req, res) => {
    res.send("Delete account");
});

///////////////////

router.get('/:username', (req, res) => {
    res.send("Get info about this account");
});
router.put('/:username', (req, res) => {
    res.send("Edit account");
});
router.patch('/:username', (req, res) => {
    res.send("Edit account");
});

module.exports = router;
