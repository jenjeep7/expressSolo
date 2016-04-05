var express = require('express');
var app = express();
var path = require('path');



app.listen(3000, function(){
  console.log("We are up and running");
});


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, './index.html'));
});
