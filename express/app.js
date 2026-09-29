const express = require('express');

const app = express();

// app.use((req,res)=>{ //app.use is used to handle all types of HTTP requests (GET, POST, PUT, DELETE, etc.)
// //  for the specified path. in this case, it will handle all requests to the root path '/'.

//     console.log(req.method, req.url);
//     // res.send({
//     //     message: 'Hello World'
//     // }); 
//     res.send('Hello World');
// });

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/about',(req,res)=>{
    res.send('About Page');
});

app.post('/contact',(req,res)=>{
    res.send('Contact Page');
});

app.get('/users/:username/:id',(req,res)=>{ // The ':id' is a route parameter that can be accessed using 'req.params.id'. It allows you to capture dynamic values from the URL.
    const userId = req.params.id;
    console.log(req.params);
    res.send(`User ID: ${userId}`);
});

app.get('/search',(req,res)=>{ // search?q=express&page=1
   const query = req.query.q; // The 'q' is a query parameter that can be accessed using 'req.query.q'. It allows you to capture values from the query string of the URL.
   const page = req.query.page; 
   console.log(req.query);
   res.send(`Search Query: ${query} Page: ${page}`); 

  
});

app.use((req, res) => { // same as app.all('*', (req, res) => { ... })
    res.status(404).send('Page Not Found');
});

const PORT = 3030;

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})