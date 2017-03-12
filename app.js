var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

app.get('/contact', function (req, res) {
    res.render('contact');
})
/* ======================             Send emails             =========================
 * ==================================================================================== */
// posts
app.post('/contact', function(req, res) {

    var api_key = 'key-72916870e45420d483c0f986c6f86fc3';
    var domain = 'sandbox4e336780d1534551a26ae48fe2ad80f0.mailgun.org';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

    var data = {
        from: 'Mail Gun <postmaster@sandbox4e336780d1534551a26ae48fe2ad80f0.mailgun.org>',
        to: 'artemoutpacer@gmail.com',
        subject: req.body.subject + 'userName: ' + req.body.userName,
        text: 'user email: ' + req.body.email + 'user message: ' + req.body.message
    };

    mailgun.messages().send(data, function (error, body) {
        console.log(body);
        if(!error)
            res.send("Mail Sent");
        else
            res.send("Mail not sent <br/>Error Message : "+error);
    });
});
/* ==================================================================================== */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




module.exports = app;