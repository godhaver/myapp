var express = require('express');

var app = express();

app.get('/',function (req,res) {
  res.send('Hello world ! 안녕 세상아~ ');
});

app.listen(3000, function () {
  console.log('server on! 서버온');
});
