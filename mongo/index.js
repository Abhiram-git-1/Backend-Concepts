const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
       
}

main()
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("Error connecting to MongoDB:", err));

const userSchema = new mongoose.Schema({
    userId: String,
    username: String,
    age: Number,
    email: String,
    password: String
});

const User = mongoose.model("User", userSchema);
const Employee = mongoose.model("Employee", userSchema);

const user1 = new User({
    userId: "1",
    username: "JohnDoe",
    age: 30,
    email: "johndoe@example.com",
    password: "password123"
});

// user1.save();

// const employee1 = new Employee({
//     userId: "2",
//     username: "JaneSmith",
//     email: "janesmith@example.com",
//     password: "password456"
// });
// employee1.save().then(() => console.log("Employee saved successfully:", employee1))
// .catch((err) => console.log("Error saving employee:", err));

// User.insertMany([
//     {
//         userId: "3",
//         username: "BobJohnson",
//         email: "bobjohnson@example.com",
//         password: "password789"
//     },

//     {
//         userId: "4",
//         username: "AliceBrown",
//         email: "alicebrown@example.com",
//         password: "password012"
//     },
//     {
//         userId: "5",
//         username: "CharlieDavis",
//         email: "charliedavis@example.com",
//         password: "password345"
//     }
// ]).then((data) => console.log("Users inserted successfully:", data))
// .catch((err) => console.log("Error inserting users:", err));

// User.find({}).then((users) => console.log("All users:", users)) // find doest return a promise but it returns a query object which has then method to handle the result of the query.
// .catch((err) => console.log("Error fetching users:", err)); 

// User.find({userId: {$gt : "3"}}).then((users) => console.log("Users with userId greater than 3:", users[0]))
// .catch((err) => console.log("Error fetching users:", err));

// User.findOne({userId: {$gt : "3"}}).then((users) => console.log("Users with userId greater than 3:", users))
// .catch((err) => console.log("Error fetching users:", err));

// User.findById("69b44eb42da5ee6a96f90c50").then((users) => console.log("Users with userId greater than 3:", users))
// .catch((err) => console.log("Error fetching users:", err));

// User.updateOne({userId: "3"}, {username: "UpdatedUser"}).then((result) => console.log("User updated successfully:", result))
// .catch((err) => console.log("Error updating user:", err));

// User.updateOne({userId: "3"}, {age: 43}).then((result) => console.log("User updated successfully:", result))
// .catch((err) => console.log("Error updating user:", err));
// User.updateOne({userId: "1"}, {age: 49}).then((result) => console.log("User updated successfully:", result))
// .catch((err) => console.log("Error updating user:", err));
// User.updateOne({userId: "2"}, {age: 51}).then((result) => console.log("User updated successfully:", result))
// .catch((err) => console.log("Error updating user:", err));
// User.updateOne({userId: "4"}, {age: 11}).then((result) => console.log("User updated successfully:", result))
// .catch((err) => console.log("Error updating user:", err));
// User.updateOne({userId: "5"}, {age: 23}).then((result) => console.log("User updated successfully:", result))
// .catch((err) => console.log("Error updating user:", err));


// User.updateMany({age: {$gt: 40}}, {age: 100}).then((result) => console.log("Users updated successfully:", result))
// .catch((err) => console.log("Error updating users:", err));

// User.findByIdAndUpdate("69b44eb42da5ee6a96f90c50", {age: 110000}, {new: true}).then((result) => console.log("User updated successfully:", result))
// .catch((err) => console.log("Error updating user:", err));


User.findOneAndDelete({age: {$gt: 500}}).then((result) => console.log("User deleted successfully:", result))
.catch((err) => console.log("Error deleting user:", err));

