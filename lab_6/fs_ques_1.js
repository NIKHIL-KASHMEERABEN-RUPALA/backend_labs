const fs = require("fs");

fs.readFile("read.txt","utf8",(err,data)=>{
    if(err){
        console.error("THe following error is coming "+err.message);
    }
    else{
        console.log(data);
    }
});


try{
    const data = fs.readFileSync("read.txt","utf8");
    console.log("Sync file is ---")
    console.log(data);
}catch(err){
    console.error("The following error is coming : ",err.message);
}