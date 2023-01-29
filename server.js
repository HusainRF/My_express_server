const express = require("express");
const app = express();

app.get("/" ,function(req, res){
    res.send("<h1> Hello World!!.......");
});

app.listen(3001,function(){
    console.log("server started on port 3000");
});