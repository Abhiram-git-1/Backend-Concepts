const express = require("express");

const postsRouter = express.Router();
// index- posts

postsRouter.get("/", (req, res) => {
    res.send("List of posts");
});

// create-post

postsRouter.post("/new", (req, res) => {
    res.send("Form to create a new post");
});

// show - post

postsRouter.get("/:id", (req, res) => {
    res.send(`Post with id ${req.params.id}`);
});

// delete -post

postsRouter.delete("/:id", (req, res) => {
    res.send(`Delete post with id ${req.params.id}`);
});

module.exports = postsRouter;