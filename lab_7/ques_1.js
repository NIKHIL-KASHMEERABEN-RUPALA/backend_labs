const http = require('http');

const newServer = http.createServer((req,res)=>{
res.write("HEllo world !! ");
res.end("The server is ending this writting ");
});

newServer.listen(3000,(req,res)=>{
    console.log("The web-server started @3000")
})

// create a hello world web-app using http core module is node.js
