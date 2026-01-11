const fs = require('fs');

try{
    const data = fs.readFileSync("read.txt","utf8");
    console.log("Sync file is ---")
    console.log(data);
}catch(err){
    console.error("The following error is coming : ",err.message);
}