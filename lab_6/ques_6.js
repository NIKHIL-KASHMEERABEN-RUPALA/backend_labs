const fs = require('fs');

fs.mkdir("dir.txt",(err)=>{
    if(err){
        console.log("The following error is coming :    "+err.message);
    }
    else{
        console.log("The folder has been created successfully")
    }
});