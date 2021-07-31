var express = require('express')
var app = express()

app.listen(8000, function(req,res){
    console.log("open");
})

app.get('/' ,function(req,res){
    res.sendFile(__dirname + "/index.html")
})