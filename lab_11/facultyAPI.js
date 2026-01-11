const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://rupalanikhil8:7yz888rpA2i9nF4F@cluster0.fzjq0qm.mongodb.net/sample_db?appName=Cluster0')
.then(()=>{
    console.log("The database is connected successfully ")
})
.catch((err)=>{
    console.error("The error coming is :  ",err);
})

const mySchema = new mongoose.Schema({
    name:String,
    age:Number,
    college:String
});



const model_1 = mongoose.model('model_1',mySchema);

app.use(express.json());

app.post('/addFaculty',async (req,res)=>{
    try{
        const data = new model_1(req.body);
        const result = await data.save();
        res.status(201).send(result);
    }catch(err){
        res.status(400).send(err);
    }
});


app.get('/getFaculty', async (req,res)=>{
    try{
        const faculty = await model_1.find();
        res.status(200).send(faculty);
    }catch(err){
        res.status(400).send(err)
    }
})

app.post('/getFacultyById/:id',async (req,res)=>{
    try{
        const faculty = await model_1.findById(req.params.id);
        res.status(200).send(faculty);
    }
    catch(err){
        res.status(400).send(err);
    }
});

app.post('/updateFaculty/:id', async(req,res)=>{
    try{
        const faculty_to_change = await model_1.findByIdAndUpdate(req.params.id , req.body , {new:true});
        res.status(200).send(faculty_to_change);
    }catch(err){
        res.status(400).send(err);
    }

});


app.delete('/deleteFaculty/:id', async(req,res)=>{
    try{
        const deleted_faculty = await model_1.findByIdAndDelete(req.params.id);
        res.status(200).send(deleted_faculty);
    }
    catch(err){
        res.status(400).send(err);
    }
});


app.listen(3000,()=>{
    console.log("The web-server is running at port 3000");
});