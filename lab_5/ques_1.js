const child_p = require("child_process");
console.log(child_p);


child_p.exec("node -v",(error,stdout)=>{
    if(error){
        console.error("\nThe following error is coming bro :      \n",error.message);
    }
    console.log(stdout);
});





child_p.exec('find /',(error,stderr,stdout)=>{
    if(error){
        console.error(`\nthe following error is coming : ${error.message}\n`);
    }
    if(stderr){
        console.error(`\nThe following stderr is coming : ${stderr}\n`)
    }
    console.log(`\nThe following stdou is : ${stdout}\n`)
    
    })