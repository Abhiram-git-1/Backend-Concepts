const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get("/register", (req, res)=>{
    console.log(req.query);
    const {username, password}= req.query; 
    res.send(`standard get request, welcome ${username}!`);
});

app.post("/register", (req, res)=>{
    console.log(req.body);
    const {username, password}= req.body;
    res.send(`standard post request, welcome ${username}!`);
});


const Port = 3030;

app.listen(Port, ()=>{
    console.log(`Server is running on port http://localhost:${Port}`);
});
