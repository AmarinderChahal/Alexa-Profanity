var express = require('express'),
    http    = require('http');

exports.app = express();
exports.server = http.createServer(exports.app);

exports.app.get('/', function(req, res) {
  res.send("helo frend");
});

exports.server.listen(3000);