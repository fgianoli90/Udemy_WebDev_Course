//jshint esversion:6

const express = require("express");
const app = express();
const https= require("https");
const bodyParser = require ("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){

    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){

    const query = req.body.cityName;
    const apikey = "37e6206f1a7f3779041c9c29b234fd8b";
    const unit ="imperial";
    const url = "https://api.openweathermap.org/data/2.5/weather?appid="+apikey+"&q="+query+"&units="+unit;
 https.get(url,function(response){
     response.on("data",function(data){
         const weatherData=JSON.parse(data);
         const temp=weatherData.main.temp;
         const description=weatherData.weather[0].description;
         const icon = weatherData.weather[0].icon;
         const imgsource=`http://openweathermap.org/img/wn/${icon}@2x.png`;
         console.log(description);
         res.write("<p><h1>The weather in "+query+" is currently " + description + ".</h1></p>");
         res.write("<p><h1>The temperature in "+query+" is " + temp + " degrees fahrenheit.</h1></p>");
         res.write(`<img src=${imgsource}>`);
         res.send();

     });
 });
});




app.listen(3000, function(){
    console.log("Server started on PORT 3000.");
});