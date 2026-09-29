const mongoose = require('mongoose');

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationdemo");
}

main()
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("Error connecting to MongoDB:", err));



const userSchema = new mongoose.Schema({
    username: String,
    addresses : [
        {
            _id : false,
            street: String,
            city: String
        }
    ]
});

const User =mongoose.model("User", userSchema);

const addusers = async () => {
    const user1 =  new User({
    username: "JohnDoe",
    addresses: [
        {
            street: "123 Main St",
            city: "New York"
        }
    ]
});

user1.addresses.push({
    street: "456 Elm St",
    city: "San Francisco"
});

const user = await user1.save();
console.log(user);

}

addusers();