var express = require('express');
var app = express.createServer(express.logger());
var fs = require("fs");
fs.readFile(path.join(process.cwd(), 'index.html'), function(err, data) {
if (err) throw err;
console.log(data.toString());
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
console.log("Listening on " + port);
});
