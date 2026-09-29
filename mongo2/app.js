const express = require('express');
const mongoose =require('mongoose');
const path = require('path');
const Chat = require("./models/chat");
const methodOverride = require("method-override");

const port = 3000;

const app = express();
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/chitchat");
}

main()
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("Error connecting to MongoDB:", err));


app.get("/", (req, res) => {
    res.render("index");
});

app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    res.render("chats", { chats });
   
});

app.get("/chats/new", (req, res)=>{
    res.render("newchat");
});

app.post("/chats", async (req, res) => {
    let { sender, receiver, message } = req.body;
    await Chat.insertOne({
        sender,
        receiver,
        message,
        timestamp: new Date(),
    });
    res.redirect("/chats");
});

app.get("/chats/:id/edit", async (req, res) => { 
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("editchat", { chat });
});

app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { message: newmesg} = req.body;
    await Chat.findByIdAndUpdate(id, { message: newmesg }, { runValidators: true, new: true });
    res.redirect("/chats");
});

app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});

app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});