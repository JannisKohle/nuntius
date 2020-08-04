const express = require('express');
const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
    res.send(`Get the result for ${req.params.s}`)
})

module.exports = router;
