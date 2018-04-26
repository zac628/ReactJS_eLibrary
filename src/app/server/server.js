const express = require('express');
const mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    //properties...
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ReactJS-eLib',
    port: '8889'

});

connection.connect(function (error) {
    if(!!error){
        console.log(error)
    }else{
        console.log('Connected');
    }
});

app.get('/', function(req, resp){
   //about sql
   connection.query("SELECT * FROM users", function(error, rows, fields){
       // callback
        if(!!error){
            console.log(error)
        }else{
            //parse
            console.log('success')
            console.log(rows);
        }
    });
});

app.listen(1337);