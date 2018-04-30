const express = require('express');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser')

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
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

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
    const {pic, title, author, des, loc} = req.query;
    const ADD_BOOK = `INSERT INTO books (title, author, description, picLoc, bookLoc) VALUES ('${title}', '${author}', '${des}', '${pic}', '${loc}');`;
    connection.query(ADD_BOOK, function(error, results, next){

        if(!!error){
            console.log(error);
            res.send('Something went wrong');
        }else{

            console.log('book add success');
            res.send('book added');
        }

    })
});

app.get('/signUp', function(req, res, next){
    const {name, user, pass} = req.query;
    const ADD_USER = `INSERT INTO users (name, username, password) VALUES ('${name}','${user}','${pass}');`;
    connection.query(ADD_USER, function(error, results){
        if(!!error){
            console.log(error);
            //res.send('Could not add user');
        }else {
            //res.send('user added');
            console.log('user added');
                    const AUTH_USER = `Select * FROM users WHERE username = '${user}' AND password = '${pass}'`;
                    connection.query(AUTH_USER, function(error, results){
                        if(!!error){
                            console.log(error);
                            res.send('Something went wrong');
                        }else{
                            if(results.length >0) {
                                console.log('success');
                                const name = results[0].name;
                                const lvl = results[0].user_lvl;
                                const id = results[0].userid;
                                //res.redirect('http://localhost:8080/');
                                return res.json([name, lvl, id]);
                                //next();

                            }else{
                                console.log('Something went wrong');
                                //res.send('Something went wrong');
                                return res.json(false);
                            }
                        }
                    });
        }
    });

});

app.get('/prev',function(req, res){
   const {id, user} = req.query;
   ADD_PREV = `INSERT INTO dloads (user,book) VALUES ('${user}','${id}');`;
    connection.query(ADD_PREV, function(error, results, next){

        if(!!error){
            console.log(error);
            res.send('Something went wrong adding book to prev');
        }else{

            console.log('book added to prev success');
            res.send('book added to prev success');
        }

    })
});

app.get('/showPrev', function(req, res, next) {
    const { userid } = req.query;
    const TO_SEARCH = `Select dloads.user, dloads.book, books.bookid, books.title, books.author, books.description, books.bookLoc, books.picLoc FROM dloads LEFT JOIN books ON dloads.book = books.bookid WHERE user = '${userid}';`;
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


app.get('/del', function (req, res) {
   const{id} = req.query;
   const DEL_BOOK = `DELETE FROM books WHERE bookid='${id}';`;
    connection.query(DEL_BOOK, function(error, results, next){

        if(!!error){
            console.log(error);
            res.send('Something went wrong');
        }else{

            console.log('book DELETE success');
            res.send('book deleted');
        }

    })
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
                const id = results[0].userid;
                //user found
                /*
                res.cookie('eLibUsername', results[0].username,{path: '/',httpOnly : false});
                res.cookie('eLibName', results[0].name, {path: '/',httpOnly : false});
                res.cookie('eLibLvl', results[0].user_lvl, {path: '/', httpOnly : false});
                */
                //res.send(results[0].name);
                console.log('success');
                //res.redirect('http://localhost:8080/');
                return res.json([name, lvl, id]);
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