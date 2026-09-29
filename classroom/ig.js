const express = require("express");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");

const app =express();
app.use(cookieParser("secretcode"));
//Users
app.use("/users", userRouter);

//posts
app.use("/posts", postRouter);

app.get("/", (req, res) => {
    console.dir(req.cookies);
    res.send("Hello World!");
});
app.get("/getcookies", (req,res)=>{
    res.cookie("greet", "namaste");
  
    res.send("sent you some cookies")
})

app.get("/greet", (req,res)=>{
    let {name = "Guest"} = req.cookies;
    res.send(`Hello ${name}`);
})

app.get("/setcookie", (req, res) => {
    res.cookie("username", "sachin", {
        maxAge: 1000 * 60 * 60 * 24, // cookie expires in 1 day automatically
        httpOnly: true // cookie is only accessible via HTTP
    });
    res.send("cookie set");
})

app.get("/getsignedcookie", (req, res) => {
  res.cookie("madeIn", "India", {signed : true}) ;
  res.send("signed cookie sent");
});
app.get("/verify", (req, res) => {
  res.send(req.signedCookies);
});
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});