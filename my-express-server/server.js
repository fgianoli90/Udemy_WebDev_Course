//jshint esversion:6

const express = require("express");
const app= express();

app.get("/", function(req,res){
    res.send("<h1>Hello World. I finally get express!</h1>");
});

app.get("/contact", function(req,res){
    res.send("Contact me at frenchyg@whodis.com");
});

app.get("/about", function(req,res){
    res.send("<p>My name is Francesca but I also go by Frenchy.</p><br/><p>I like the following things:</p><ul><li>Pineapple Pizza</li><li>Travel</li><li>Soccer</li><li>Dancing to Music</li></ul>");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
