//step 1 : import express(using npm )
const express= require("express");
// step 2: creat server and listen
 const server = express();
 server.listen(4400);

 // step 3: creat depault response 
 server.get("/",(req,res)=>{
     res.end("hello world from express");
 });
  
 console.log("server is listening on 4400");