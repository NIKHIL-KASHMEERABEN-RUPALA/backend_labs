const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({

    name:{
        type:String,
        required:True
    },department :{
        type:String,
        required:True
    }, email :{
        type:String,
        required:True,
        unique:True
    }, experience :{
        type:Number,
        required:True
    }

});

module.exports = mongoose.model("Faculty",facultySchema);