const express = require("express");
const app = express();

app.get("/" ,function(req, res){
    res.send("<h1> Hello World!!.......");
});

app.get("/contact" ,function(req, res){
    res.send("<h1> Husain@gmail.com");
});

app.get("/about" ,function(req, res){
    res.send("<h1>I am Husain</h1><p> I am a programmer ans I am learning the express for node js. I am currently in a third year of my college medi-caps University.</p><br><p>That's all about me THhank You!!</p>");
});

app.listen(3000,function(){
    console.log("server started on port 3000");
});