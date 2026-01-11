const fs = require('fs');

fs.readdir("LAB_6",(err,file)=>{
    if(err){
        console.log("The following error is coming :    "+err.message);
    }
    else{
    file.forEach(files=>{
        console.log(files);
    })}
})