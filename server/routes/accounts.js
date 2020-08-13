const express = require('express');
const {parse, stringify} = require('flatted');
const router = express.Router();
const { Account, getAccounts, createAccount, deleteAccount } = require("../models/Account");

router.use(express.json());


router.get('/', (req, res) => {
    // Get a list of all accounts

    getAccounts().then((data) => res.status(200).send(data));
});

router.post('/', (req, res) => {
    // Create a new account

    createAccount(req.body.username, req.body.realname, req.body.picture, req.body.email, req.body.password).then((response) => {
        if (response === "error") {
            res.status(400).send({"message": "username already exists"});
        } else {
            res.status(201).send(response);
        }
    });
});

router.delete('/', (req, res) => {
    // Delete account

    deleteAccount(req.body.username).then((data) => res.status(200).send(data));
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
