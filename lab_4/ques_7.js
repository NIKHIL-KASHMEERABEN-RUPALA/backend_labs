const os = require('os');

function toGB(bytes){
    return(bytes/(1024*1024*1024)).toFixed(2);
}

console.log("The total memory (the memory in the RAM) is :      ",toGB(os.totalmem()));
console.log("The total memory free is :     ",toGB(os.freemem()));