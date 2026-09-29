const express = require("express");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
const app =express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(flash());

const sessionOptions = {
    secret : "mysupersecretstring",
    resave : false, // if true, session will be saved even if the session is not modified
    saveUninitialized : true // if true, session will be saved even if the session is not initialized
}

app.use(session(sessionOptions));

app.use((req,res,next)=>{
    res.locals.successmesg= req.flash("success");
    res.locals.errormesg = req.flash("error");
    next();
})
app.get("/register", (req,res)=>{
    let{name = "guest"} = req.query;
    req.session.name = name; // store the name in the session // for one user you logins or for one session the name will be accessed in the session on different pages/routes
    //res.send(`Welcome ${name}`);

    if(name === "guest"){
        req.flash("error", "user not registered")
    }
    else
    req.flash("success", "user logged in successfully");
    
    res.redirect("/hello");
})
app.get("/hello",(req,res) => {
   // res.send(`hello, ${req.session.name}`); // retrieve the name from the session
   
   res.render("page", {name : req.session.name, mesg: req.flash("success")});
});

// app.get("/test", (req, res) => {
//     res.send("test success")
// // })
// app.get("/reqcount", (req, res) => {
//     if(req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count = 1;
//     }
//     res.send(`You visited this page ${req.session.count} times`);
// })
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});