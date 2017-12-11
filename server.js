var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

require('dotenv').config();
require('./config/database');
var app = express();

app.use(logger('dev'));


app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());

app.use('/api/products', require('./routes/api/products'));

app.get('/*', function(req, res) {
    res.sendFile(path.join__dirname, 'build', 'index.html');
});

var port = process.env.PORT || 3002;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`);
})