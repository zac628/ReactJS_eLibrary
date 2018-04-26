const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
var app = express();

var connection = mysql.createConnection({
    //properties...
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ReactJS-eLib',
    port: '8889'

});

app.use(session({
    secret: 'yoloSwag'
}));

connection.connect(function (error) {
    if(!!error){
        console.log(error)
    }else{
        console.log('Connected');
    }
});


app.get('/users', function(req, res){
//about sql
    connection.query("SELECT * FROM users", function(error, results){
        // callback
        if(!!error){
            console.log(error)
        }else{
            //parse
            console.log('success')
        }

        return res.json({
            data: results
        })
    });
});

app.get('/auth', function(req, res){
    const {user, pass} = req.query;
    const AUTH_USER = `Select * FROM users WHERE username = '${user}' AND password = '${pass}'`;
    connection.query(AUTH_USER, function(error, results){
        if(!!error){
            console.log(error);
            res.send('Something went wrong');
        }else{
            if(results.length >0) {
                //user found
                console.log('success');
                //request.session.userName = user;
                res.redirect('http://localhost:8080/home');
            }else{
                console.log('Something went wrong');
                res.send('Something went wrong');
            }
        }
    });

});


app.listen(1337);