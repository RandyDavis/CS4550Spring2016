/**
 * Created by randy on 3/28/16.
 */
var express = require('express');
var app = express();
var port = 3000

app.use(express.static(__dirname + '/public'));

app.get('/hello', function (req, res) {
    res.send('hello world 123');
});

app.listen(port);