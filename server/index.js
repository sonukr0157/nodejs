const http = require("http");
const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Hi this is my home page");
    }
    else if(req.url=="/download"){
        res.end("Hi this is my download page");
    }
    else if(req.url=="/about"){
        res.end("Hi this is my about page");
    }
    else{
        res.end("404 : Page could not be found");
    }
})

server.listen(3000,()=>{
    console.log("Server listening at the port number 3000");
})