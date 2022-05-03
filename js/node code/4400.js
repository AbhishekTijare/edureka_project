//Responsible for creating a server .
//responsible for handle request and send responses.

// step 1: Import http package /library
 
const http = require("http");

//step 2: crest server usimg http
http.createServer((req,res)=>{
    res.end("hello world from nodejs ");
}).listen(4400);

console.log("server is listening on 4400");