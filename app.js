var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello Maruti Sharma ");
});

app.listen(4000,"0.0.0.0");
