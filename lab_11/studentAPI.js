const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://rupalanikhil8:7yz888rpA2i9nF4F@cluster0.fzjq0qm.mongodb.net/student_db?appName=Cluster0')
.then(()=> {console.log("Database connected successfully!")})
.catch(err => {console.error(`Error: ${err}`)});

const stuSchema = new mongoose.Schema({
  stuName: { type: String, required: true },
  stuAge: { type: Number, required: true },
  dob: { type: Date, default: Date.now },
  Mail: { type: String, required: true, unique: true },
  studentID: { type: Number, required: true, unique: true }
});

const Student = mongoose.model('Student', stuSchema);

// Create student
app.post('/student', async (req,res)=>{
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(200).send(student);
  } catch(err) {
    res.status(400).send(err);
  }
});

// Get all students
app.get('/student', async (req,res)=>{
  try {
    const students = await Student.find();
    res.status(200).send(students);
  } catch(err) {
    res.status(400).send(err);
  }
});


app.get('/student/:id', async (req,res)=>{
  try {
    const student = await Student.findOne({ studentID : Number(req.params.id)});
    res.status(200).send(student);
  } catch(err) {
    res.status(400).send(err);
  }
});


app.put('/student/:id', async (req,res)=>{
  try {
    const updated = await Student.findOneAndUpdate({ studentID : Number(req.params.id)}, req.body, { new: true });
    updated.save();
    res.status(200).send(updated);
  } catch(err) {
    res.status(400).send(err);
  }
});


app.delete('/student/:id', async (req,res)=>{
  try {
    const deleted = await Student.findOneAndDelete({ studentID : Number(req.params.id)});
    res.status(200).send(deleted);
  } catch(err) {
    res.status(400).send(err);
  }
});

const port = 4000;
app.listen(port, ()=> console.log(`Server running on port ${port}`));
