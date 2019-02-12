var express = require('express');
var app = express();
var path = require('path');

// middleware to define location of static files
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3333, function() {
  console.log('listening on port.');
});