const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
    res.send("Get all posts");
});
router.post('/', (req, res) => {
    res.send("Create a new post");
});
router.delete('/', (req, res) => {
    res.send("Delete post");
});

///////////////////

router.get("/:postId", (req, res) => {
    res.send("Get info about post");
});
router.put("/:postId", (req, res) => {
    res.send("Edit post");
});
router.patch("/:postId", (req, res) => {
    res.send("Edit post");
});

///////////////////

router.get("/:postId/replies", (req, res) => {
    res.send("Get all replies");
});
router.post("/:postId/replies", (req, res) => {
    res.send("Create a new reply");
});
router.delete("/:postId/replies", (req, res) => {
    res.send("Delete a reply");
});

///////////////////

router.get("/:postId/replies/:replyId", (req, res) => {
    res.send("Get ifno about reply");
});
router.put("/:postId/replies/:replyId", (req, res) => {
    res.send("Update reply");
});
router.patch("/:postId/replies/:replyId", (req, res) => {
    res.send("Update reply");
});

///////////////////

router.get("/:postId/replies/:replyId/likes", (req, res) => {
    res.send("Get all likes of reply");
});
router.post("/:postId/replies/:replyId/likes", (req, res) => {
    res.send("Like this reply");
});
router.delete("/:postId/replies/:replyId/likes", (req, res) => {
    res.send("Unlike this reply");
});

///////////////////

router.get("/:postId/likes", (req, res) => {
    res.send("Get all likes");
});
router.post("/:postId/likes", (req, res) => {
    res.send("Like this post");
});
router.delete("/:postId/likes", (req, res) => {
    res.send("Unlike this post");
});

module.exports = router;
