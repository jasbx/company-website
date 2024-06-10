const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));


//get home
app.get('/',(req,res)=>{
    res.render('index')
})
//404
app.get('/404',(req,res)=>{
    res.render('404')
})
//get about
app.get('/about',(req,res)=>{
    res.render('about')
})
//get contact
app.get('/contact',(req,res)=>{
    res.render('contact')
})
//get service
app.get('/service',(req,res)=>{
    res.render('service')
})
app.get('/testimonial',(req,res)=>{
    res.render('testimonial')
})
//project
app.get('/project',(req,res)=>{
    res.render('project')
})

//listen

app.listen(3000)