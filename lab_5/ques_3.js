const http = require('http');

const myServer = http.createServer((req,res)=>{

    console.log("New request recieved ! ");
    res.end("Hello from server !");


});

myServer.listen(3000,()=>{
    console.log("Server is listening on port 3000");
});


