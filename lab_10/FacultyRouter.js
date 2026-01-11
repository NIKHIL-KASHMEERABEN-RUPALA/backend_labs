const express = require('express');
const mongoose = require('mongoose');
const FacultyRoutes = require('FacultyRoutes');
const app = express();

app.post("/",async(req,res)=>{
    try{
        const faculty = new FacultyRoutes(req.body);
        const savedFaculty = await faculty.save();
        res.status(201).json(savedFaculty);
    }catch(err){
        res.status(400).json({error : error.message});
    }
});


app.get("/",async(req,res)=>{
    try{
        const faculty = await faculty.find();
        res.status(200).json(faculty);
    }catch(err){
        res.status(500).json({message : err.message});
    }
})


module.exports = app