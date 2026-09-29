const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
       
}
main()
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("Error connecting to MongoDB:", err));


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength:50,
    },
    author: {
        type: String,
    },
    price:{
        type: Number,
        min: [1, "Amazon does not sell free books"],
    },
    discount :{
        type: Number,
        default: 5,
    },
    category:{
        type: String,
        enum: ["Fiction", "Non-Fiction", "Science", "History"],
    },
    genre : [String]
});

const Book =mongoose.model("Book", bookSchema);

// const book1 = new Book({
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     price: 12.99
// });
// book1.save().then(() => console.log("Book saved successfully:", book1))
// .catch((err) => console.log("Error saving book:", err));

// Book.insertOne({
//     title: "To Kill a Mockingbiird",
//     author: "Harper Lee",
//     price: 14.99
// }).then((book) => console.log("Book inserted successfully:", book))
// .catch((err) => console.log("Error inserting book:", err));

// if price is given in string type then if it is convertable to number (parse) then it will be stroed as number otherwise it will give error  because of the type defined in the shema


// Book.insertOne({
//     title: "1984",
//     author: "George Orwell",
//     price: 13.99,
//     category: "Fiction"
// })

// Book.insertOne({
//     title: "A Brief History of Time",
//     author: "Stephen Hawking",
//     price: 15.99,
//     category: "dontknw", error
// }).then((book) => console.log("Book inserted successfully:", book))
// .catch((err) => console.log("Error inserting book:", err)); 

// Book.insertOne({
//     title:"Marvel Comics",
//     author: "Stan Lee",
//     price: 12.99,
//     category: "Fiction",
//     genre: ["Superhero", "Action", "Adventure"]
// }).then((book) => console.log("Book inserted successfully:", book))
// .catch((err) => console.log("Error inserting book:", err)); 

//schema validations are checked during update operations as well if we set the option runValidators to true otherwise it will update the document without checking the schema validations and it will allow us to save the document with invalid data which is not desired in most cases.

Book.findByIdAndUpdate("69b544e01a093230ed98d06e", { price: -16.99 }, { new: true, runValidators: true })
.then((book) => console.log("Book updated successfully:", book))
.catch((err) => console.log("Error updating book:", err.errors.price.message));