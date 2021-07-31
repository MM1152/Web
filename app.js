var express = require('express')
var app = express()

app.listen(8000, function(req,res){
    res.send("Hello World");
})