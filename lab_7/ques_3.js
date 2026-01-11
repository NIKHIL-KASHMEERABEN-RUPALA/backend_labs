const http = require('http');
const fs = require('fs');





const server = http.createServer((req,res)=>{
    res.write("greetings from server !!");

    if(req.url == "/about"){

        fs.writeFile("about.txt","This is an about file","utf8",(err)=>{
        if(err){
            console.log(`The following error occured :  ${err}`);
        }
        });

        fs.readFile("about.txt","utf8",(err,data)=>{
            if(err){
            console.log(`The following error occured :  ${err}`);
            
        }
        else{
            res.end(data)
        }
        })

    }

    // if(req.url == "/contact"){

    //     fs.writeFile("contact.txt","This is an contact file","utf8",(err)=>{
    //     if(err){
    //         console.log(`The following error occured :  ${err}`);
    //     }
    //     });


    // }


    // if(req.url == "/design"){

    //     fs.writeFile("design.txt","This is an contact file","utf8",(err)=>{
    //     if(err){
    //         console.log(`The following error occured :  ${err}`);
    //     }
    //     });


    // }


    // res.end();
});
 

server.listen(5000,()=>{
    console.log("The web-server started listening at @5000 ");
})