const express = require('express');
const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
    res.send("Get settings");
});
router.put("/", (req, res) => {
    res.send("Update settings");
});
router.patch("/", (req, res) => {
    res.send("Update settings");
});

module.exports = router;
