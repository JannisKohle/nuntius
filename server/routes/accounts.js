const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
    res.send('Get a list of all accounts');
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
