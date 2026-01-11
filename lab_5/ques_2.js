const child_p = require("child_process");
const cmd = child_p.spawn("bash",["/c","dir"]);

cmd.stdout.on("data",(data)=>{
    console.log(`data ${data}`)
})

      

cmd.stderr.on("data",(data)=>{
    console.error(`data ${data}`)
})
// console.log(child_p)