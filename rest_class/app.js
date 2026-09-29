const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');
const { v4: uuidv4 } = require('uuid');
app.use(express.urlencoded({extended: true}));

app.use(methodOverride('_method')); // method-override is a middleware that allows you to use HTTP verbs such as PUT or DELETE in places where the client doesn't support it. By using '_method' as the query parameter, you can specify the desired HTTP method in the form submission, and method-override will handle it accordingly.
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
const PORT = 3030;

let posts =[
    {
        id : uuidv4(),
        username : 'John Doe',
        content : 'This is a sample post content.'
    },
    {
        id : uuidv4(),
        username : 'Jane Smith',
    content : 'Another example of a post content.'
    },
    {
        id : uuidv4(),
        username : 'Alice Johnson',
        content : 'Yet another post content for testing.'
    }
];

app.get('/posts', (req, res) => {
    res.render('index', { posts });
});
app.get('/posts/new', (req, res)=>{
    res.render('new');
});
app.post('/posts', (req, res)=>{
    const { username, content } = req.body;
    let newid = uuidv4();
    posts.push({ id: newid, username, content });
    res.redirect('/posts');
});

app.get('/posts/:id', (req, res)=>{
    const postId = req.params.id;
    const post = posts.find(p => p.id === postId);
    if (post) {
        res.render('show', { post });
    } else{
        res.status(404).render('404');
    }
});
app.put('/posts/:id', (req, res)=>{
    console.log("Patch working");
    const postId = req.params.id;
    const post = posts.find(p => p.id === postId);
    if (post) {
        const { username, content } = req.body;
        post.username = username;
        post.content = content;
        res.redirect(`/posts/${post.id}`);
    } else{
        res.status(404).render('404');
    }
});
app.get('/posts/:id/edit', (req, res) =>{
    console.log("Patch working edit");
    const postId = req.params.id;
    const post = posts.find(p => p.id === postId);
    if (post) {
        res.render('edit', { post });
    } else{
        res.status(404).render('404');
    }
});

app.delete('/posts/:id', (req, res)=>{
    const postId = req.params.id;
    posts = posts.filter(p => p.id !== postId);
    res.redirect('/posts');
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});