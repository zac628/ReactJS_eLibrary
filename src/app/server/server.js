const express = require('express');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

const connection = mysql.createConnection({
    //properties...
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ReactJS-eLib',
    port: '8889'

});

app.use(cookieParser());
app.use(cors());

connection.connect(function (error) {
    if(!!error){
        console.log(error)
    }else{
        console.log('Connected');
    }
});

app.get('/find', function (req, res) {
    const { keyword } = req.query;
    const TO_SEARCH = `SELECT * FROM books WHERE (title LIKE "%${keyword}%") OR (author LIKE "%${keyword}%")`;
    connection.query(TO_SEARCH, function(error, results){
        if(!!error){
            console.log(error);
            res.send('Something went wrong');
        }else{
            //res.json(results.length);
            if(results.length > 0) {
                //book found
                //res.json(results);
                return res.json(results);
            }else{
                return res.json("no book found");
            }
        }
    });
});



app.get('/users', function(req, res){
//about sql
    connection.query("SELECT * FROM users", function(error, results){
        // callback
        if(!!error){
            console.log(error)
        }else{
            //parse
            console.log('success - query ran')
        }

        return res.json({
            data: results
        })
    });
});


app.get('/all', function(req, res, next) {
    const TO_SEARCH = `SELECT * FROM books`;
    connection.query(TO_SEARCH, function(error, results){
        if(!!error){
            console.log(error);
            res.send('Something went wrong');
        }else{
            //res.json(results.length);
            if(results.length > 0) {
                //book found
                //res.json(results);
                return res.json(results);
                next();
            }else{
                return res.json("no book found");
            }
        }
    });
});

app.get('/add', function(req, res) {

});

app.get('/auth', function(req, res, next){
    const {user, pass} = req.query;
    const AUTH_USER = `Select * FROM users WHERE username = '${user}' AND password = '${pass}'`;
    connection.query(AUTH_USER, function(error, results){
        if(!!error){
            console.log(error);
            res.send('Something went wrong');
        }else{
            if(results.length >0) {
                const name = results[0].name;
                const lvl = results[0].user_lvl;
                //user found
                /*
                res.cookie('eLibUsername', results[0].username,{path: '/',httpOnly : false});
                res.cookie('eLibName', results[0].name, {path: '/',httpOnly : false});
                res.cookie('eLibLvl', results[0].user_lvl, {path: '/', httpOnly : false});
                */
                //res.send(results[0].name);
                console.log('success');
                //res.redirect('http://localhost:8080/');
                return res.json([name, lvl]);
                //next();

            }else{
                console.log('Something went wrong');
                //res.send('Something went wrong');
                return res.json(false);
            }
        }
    });

});


app.listen(1337);