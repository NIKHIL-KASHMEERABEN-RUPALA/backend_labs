const fs = require('fs');

fs.unlink("delete.txt",(err)=>{
    if(err){
        console.error("The following error is coming :  "+err.message);
    }
    else{
        console.log("successfuly deleted");
    }
});