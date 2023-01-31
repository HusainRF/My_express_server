const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.get("/" , function(req , res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/" , function(req , res){
    // req.body.num1 represent the num1 which is the name of input item in index.html file
    // console.log(req.body.num1);
    // console.log(req.body.num2);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("the result of the calculation is " + result);
});

app.get("/bmicalculator" , function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator" , function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    console.log(weight);
    var bmi = ( weight / (height *height));
    res.send("Your BMI is " + bmi);
});

app.listen(3000, function(){
    console.log("server started for  port 3000");
});