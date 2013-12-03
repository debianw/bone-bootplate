/**
 * Module dependencies.
 */

var express = require('express')
  , app = express()
  , port = process.env.PORT || 5004
  , path = require('path');

// configure
app.use(express.static(path.join(__dirname, 'build')));

// catch-all
app.all('/', function (req, res) {
  res.sendfile('index.html');
});

// bind
app.listen(port, function () {
  console.log('Server listening on port %d', port);
});
