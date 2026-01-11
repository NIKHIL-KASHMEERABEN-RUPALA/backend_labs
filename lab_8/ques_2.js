const express = require('express');

const app = express();

app.get('/home',(req,res)=>{
    res.send("Greetings from home page !!");
});

app.get('/about',(req,res)=>{
    res.send(" about page !!");
});

app.get('/contact',(req,res)=>{
    res.send("THis is the contact page ");
});


app.get('/project',(req,res)=>{
    res.send("my projects page ");
});

app.get('/connections',(req,res)=>{
    res.send("soon will display total connections")
});

app.listen(4000,()=>{
    console.log("The web-server started @4000")
});