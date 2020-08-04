const express = require('express');
const router = express.Router();

router.use(express.json());

router.get("/recommendations", (req, res) => {
    res.send("Get the recommended posts");
});
router.post("/recommendations", (req, res) => {
    res.send("Add a post to recommendations");
});
router.delete("/recommendations", (req, res) => {
    res.send("Remove post from recommendations");
});
router.put("/recommendations", (req, res) => {
    res.send("Change all recommendations");
});

///////////////////

router.get("/trending", (req, res) => {
    res.send("Get the trending posts");
});
router.post("/trending", (req, res) => {
    res.send("Add a post to trending posts");
});
router.delete("/trending", (req, res) => {
    res.send("Remove post from trending posts");
});
router.put("/trending", (req, res) => {
    res.send("Change all trending posts");
});

///////////////////

router.get("/following", (req, res) => {
    res.send("Get posts from people you follow");
    // everytime this endpoint gets hit, it needs
    // to automatically update using the other endpoints
    // before responding !!
});
router.post("/following", (req, res) => {
    res.send("Add post to this list");
});
router.delete("/following", (req, res) => {
    res.send("Remove post from this list");
});
router.put("/following", (req, res) => {
    res.send("Change all posts from this list");
});

module.exports = router;
