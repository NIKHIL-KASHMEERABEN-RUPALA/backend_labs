const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello World using Express framework of node !!")
})

app.listen(3000,()=>{
    console.log("The web-server started @3000")
})