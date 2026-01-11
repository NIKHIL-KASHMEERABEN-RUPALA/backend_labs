// using built-in middleware ----

const express = require('express');

const app = express();

app.use(express.json())

app.get('/home',(req,res)=>{
    res.send(`Hello world from home !`);
})

// using custom middleware

const simpleMiddleware = (req,res,next)=>{
    console.log(`The following url was called :  ${req.url}   `);
    console.log(`The simple middleware was used !!`);
    next();
};

app.get('/about',simpleMiddleware,(req,res)=>{
    res.send(`Hellow from about page !`);
})


app.get('/contact',simpleMiddleware,(req,res)=>{

    res.send("Hey there ! i am speaking from contact page !! ")

});


app.listen(3000,()=>{
    console.log(`The web server started @3000`)
});




