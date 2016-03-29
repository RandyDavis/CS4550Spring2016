/**
 * Created by randy on 3/28/16.
 */
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/hello', function (req, res) {
    res.send('hello world!');
});

app.get('/users', getAllUsers);

function getAllUsers (req, res) {
    var users = [
        {username: "alice", firstname: "Alice", lastName: "Wonderland"},
        {username: "bob", firstname: "Bob", lastName: "Hope"},
        {username: "charlie", firstname: "Charlie", lastName: "Brown"}
    ];

    res.json(users);
}

app.listen(3000);