const express = require('express');
const mongoose = require('mongoose');
const FacultyRoutes = require('FacultyRoutes');
const app = express();

app.use(express.json());
mongoose.connect("");

app.then(()=>{
    console.log("Mongo DB connected");
})

app.catch((err)=>{
    console.log(`THe following error is coming : ${err.message}`)
})

app.use("/api/faculty",FacultyRoutes);

app.listen(3000,()=>{
    console.log(`The web server is running @3000 `);
})