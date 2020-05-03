//jshint esversion:6

const express= require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){

    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
    res.send("The result of the calculation is " + result);

});

app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator",function(req,res){

    var weight = parseFloat(req.body.weight)*0.453592;
    var height = parseFloat(req.body.height)*0.3048;
    var result = weight/(height*height);
    res.send("Your BMI is " + result.toFixed(2));

});

app.listen(3000, function(){
    console.log("Server connected to port 3000");
});