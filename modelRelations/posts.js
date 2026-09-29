const mongoose = require('mongoose');
const {Schema} = mongoose;
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationdemo");
}

main()
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("Error connecting to MongoDB:", err));

const UserSchema = new Schema({
    username: String,
});
// one to squillion
const PostSchema = new Schema({
    content: String,
    likes: Number,
    
    author: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
});

const Post = mongoose.model("Post", PostSchema);
const User = mongoose.model("User", UserSchema);


// let adddata = async () =>{
   
//    let user1 =  new User({username: "JackDoe"});
    
//    await user1.save();

//    let user = await User.findOne({username: "JackDoe"});
   
//    let user2 = new User({username: "Rohith"});
//    await user2.save();

//    let post1 = new Post({content: "ipl", likes: 10, author: user1._id});
//     let post2 = await Post.create({content: "virat", likes: 100 });
//     let post3 = await Post.create({content: "dhoni", likes: 22});
//     let post4 = await Post.create({content: "rohith", likes: 66});

//    post1.author = user1;
//     post2.author = user;
//     post3.author = user;
//     post4.author = user2;

//    await  post1.save();
//    await  post2.save();
//    await  post3.save();
//    await  post4.save();
// }

// adddata();

let getdata = async () => {
    let posts = await Post.findOne({}).populate("author");
    console.log(posts);
}
getdata();
