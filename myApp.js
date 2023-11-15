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
}
);
console.log("Hello World");



































 module.exports = app;
