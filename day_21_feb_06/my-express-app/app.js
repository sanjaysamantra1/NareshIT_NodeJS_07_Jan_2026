var express = require('express');
var path = require('path');   // path - nodejs module
var cookieParser = require('cookie-parser'); // middleware , for client cookie
var logger = require('morgan');  // middleware , used for logging

var indexRouter = require('./routes/index');    // Routes for localhost:3000/
var usersRouter = require('./routes/users');    // Routes for localhost:3000/users
var productsRouter = require('./routes/products');    // Routes for localhost:3000/products

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

module.exports = app;
