const express = require('express');
const path = require('path');
const app =express();


app.set('view engine', 'ejs'); // Set EJS as the view engine for rendering templates. This allows you to use EJS syntax in your template files (e.g., .ejs files) to generate dynamic HTML content.
app.set('views', path.join(__dirname, '/views')); // Set the directory where your EJS template files are located. In this case, it is set to a folder named 'views' in the same directory as the app.js file.
app.use(express.static(path.join(__dirname, '/public/css'))); // Serve static files (like CSS, JavaScript, images) from the 'public' directory. This allows you to reference these files in your EJS templates and have them served correctly when requested by the client.
app.use(express.static(path.join(__dirname, '/public/js')));

app.get('/',(req,res)=>{
    res.render('home', { name: 'Abhis'});
});

app.get('/rolldice',(req,res)=>{
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    res.render('dice', { randomNumber });
});

app.get('/ig/:username', (req,res)=>{
    let user = req.params.username;
    const followers =["John", "Jane", "Doe"];
    res.render('profile', { user, followers });
});

app.get('/animals/:name', (req,res)=>{
    let {name} = req.params;
    const data = require('./data.json');
    const newanimal= data[name];
    if (!newanimal) {
        return res.status(404).send("Animal not found");
    }
    res.render('animals', {newanimal});  
});
const PORT = 3030;

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})