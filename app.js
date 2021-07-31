var express = require('express')
var app = express()

app.use(express.static('public'));

app.listen(8000, function(req,res){
    console.log(__dirname);
})

app.get('/' ,function(req,res){
    res.sendFile(__dirname + "/index.html")
})
