const fs = require('fs');

fs.writeFile("new.txt","This is a new file man !!",(err)=>{
    if(err){
        console.error("The following error is coming : "+err.message);
    }
    else{
        console.log("THe file has been written successfully ");
    }
});