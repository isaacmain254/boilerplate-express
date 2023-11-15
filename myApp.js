let express = require('express');
let app = express();
require('dotenv').config();

// middleware for serving static files
app.use('/public', express.static(__dirname + '/public'));

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
