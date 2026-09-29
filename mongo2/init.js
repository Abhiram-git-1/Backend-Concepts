const mongoose =require('mongoose');
const Chat = require("./models/chat");


async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/chitchat");
}

main()
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("Error connecting to MongoDB:", err));



let chats = [
    {
        sender: "Bob",
        receiver: "Alice",
        message: "Hi Alice! I'm good, thanks for asking. How about you?",
        timestamp: new Date(),
    },
    {
        sender: "Alice",
        receiver: "Bob",
        message: "I'm doing well too! Just wanted to check in and see how you're doing.",
        timestamp: new Date(),
    },
    {
        sender: "alex",
        receiver: "charlie",
        message: "Hey char, what's up?",
        timestamp: new Date(),
    },
    {
        sender: "cham",
        receiver: "qwest",
        message: "Hello qwest! How's it going?",
        timestamp: new Date(),
    },
    {
        sender: "cherry",
        receiver: "mango",
        message: "Hi mango! Long time no see. How have you been?",
        timestamp: new Date(),
    },
    {
        sender: "grape",
        receiver: "kiwi",
        message: "Hey kiwi! ",
        timestamp: new Date(),
    }
]

Chat.insertMany(chats);

