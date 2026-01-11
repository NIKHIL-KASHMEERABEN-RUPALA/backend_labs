const fs = require("fs");
const express = require('express');

const app = express();

app.get("/home",(req,res)=>{
    fs.writeFileSync("home.txt","This are the content of the home page bro !");
    
    fs.readFile("home.txt","utf8",(err,data)=>{
        if(err){
            console.err(`The following errors are coming :  ${err.message}`);
        }
        else{
            console.log(`<h1>The following data is coming :     }<h1>`);
        }
       res.send(`<h1>The following data is coming :  <h1>`);
    })
     
});



app.get("/about",(req,res)=>{
    fs.writeFileSync("about.txt","The about page has been written !");
    
    fs.readFile("about.txt","utf8",(err,data)=>{
        if(err){
            console.err(`The following errors are coming :  ${err.message}`);
        }
        else{
            console.log(`The following data is coming :     ${res.send(data)}`);
        }
    })
});




app.get("/contact",(req,res)=>{
    fs.writeFileSync("contact.txt","The contact page has been created !");
    
    fs.readFile("contact.txt","utf8",(err,data)=>{
        if(err){
            console.err(`The following errors are coming :  ${err.message}`);
        }
        else{
            console.log(`The following data is coming :     ${res.send(data)}`);
        }
    })
});



app.listen(5000,()=>{
    console.log("The web-server started @5000");
});