let express = require('express');
let app = express();
require('dotenv').config();

// middleware for serving static files
app.use('/public', express.static(__dirname + '/public'));

// Logger middleware
app.use(function(req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

// chain middleware to create a time server
app.get('/now', function(req, res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res) {
    res.send({"time": req.time});
});
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

// api route
app.get('/json', function(req, res) {
    let response = "Hello json";
    if (process.env.MESSAGE_STYLE === "uppercase") {
        response = response.toUpperCase();
    }
    res.json({"message": response});
});

app.get('/:word/echo', function(req, res) {
    res.json({"echo": req.params.word});
})
console.log("Hello World");



































 module.exports = app;
