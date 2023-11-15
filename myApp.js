let express = require('express');
let app = express();

// middleware for serving static files
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

console.log("Hello World");



































 module.exports = app;
