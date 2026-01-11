const http = require('http');

const server = http.createServer((req,res)=>{
    

    if(req.url == "/about"){
        res.write("Hello world from about page ")
        
    }
    else if(req.url == "/contact"){
        res.write("Hello world from contact page ")
    }
    else if(req.url == "/projects"){
        res.write("Hello world from projects page ")
    }
    else if(req.url == "/sponsor"){
         res.write("Hello world from sponsor page ")
    }

    else if(req.url == "/appreciation"){
         res.write("Hello world from appreciation page ")
    }
    res.end()
    
});

server.listen(4000,()=>{
console.log("The server stated @4000 ")
});