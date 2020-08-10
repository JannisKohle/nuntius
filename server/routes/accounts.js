const express = require('express');
const {parse, stringify} = require('flatted');
const router = express.Router();

const {Account, getAccounts, createAccount} = require("../models/Account");

router.use(express.json());

router.get('/', (req, res) => {
    // Get a list of all accounts

    getAccounts().then((data) => res.send(data));
});

router.post('/', (req, res) => {
    // Create a new account

    createAccount(req.body.username, req.body.realname, req.body.picture, req.body.email, req.body.password).then((data) => res.send(data));
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
