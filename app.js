const express = require('express');

const app = express();

app.listen(3005);

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.use((req,res, next) => {
    console.log(req.url, req.method);
    next();
});

app.get('/',(req,res) => {
    // console.log('Hello home');
    const people =[{name: 'John',sayHello:true},{name: "farida", sayHello:true},{name:"alice", sayHello:false}];
    res.render('home',{people});
});
app.get('/about',(req,res) => {
    console.log('Hello ');
    res.render('about',{title: 'about page'});
});

app.use((req,res) => {
    console.log('Hello world');
    res.status(404).render('404');
    // res.status(404).sendFile('./views/404.html', {root: __dirname});
});