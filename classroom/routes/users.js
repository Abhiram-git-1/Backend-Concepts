const express = require("express");

const userRouter = express.Router();

//Users

// index- users

userRouter.get("/", (req, res) => {
    res.send("List of users");
});

// create-user

userRouter.post("/new", (req, res) => {
    res.send("Form to create a new user");
});

// show-user

userRouter.get("/:id", (req, res) => {
    res.send(`User with id ${req.params.id}`);
});

// delete- user

userRouter.delete("/:id", (req, res) => {
    res.send(`Delete user with id ${req.params.id}`);
});

module.exports = userRouter;
