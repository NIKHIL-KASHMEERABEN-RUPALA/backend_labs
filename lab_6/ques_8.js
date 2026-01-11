const fs = require('fs')

fs.copyfile("new.txt","hey.txt",(err)=>{
    if(err){
        console.log("The following error is coming :    "+err.message);
    }else{
        console.log("The file got copied successfully :     ")
    }
})