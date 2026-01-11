const fs = require('fs');

fs.appendFile("new.txt","THis is the new file ",(err)=>{
    if(err){
        console.error("The following error is coming :  "+err.message);

    }else{
        console.log("THe text has been appended successfully ")
    }
})