const express = require(`express`);
const app = express();

const port = 4500;

app.use(express.static(__dirname));

app.get(`/home`,(req,res)=>{
    res.send(`The static middleware is working , try accessing abc.txt`);
});




app.listen(port,()=>{
    console.log(`The web server started @ ${port}`);
});