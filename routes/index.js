// Declaire our variables

var express = require('express');
var router = express.Router();



/* ====================== Create our pages by GET and Render =========================
* ==================================================================================== */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home of Artem\'s portfolio' });
});

router.get('/aboutme', function (req, res, next) {
    res.render('aboutme', {message: 'Welcome:-)'});
});

router.get('/services', function (req, res, next) {
    res.render('services', {randomText: 'RandomTetx bla bla'});
});

router.get('/projects', function (req, res, next) {
    res.render('projects');
});

router.get('/contact', function (req, res, next) {
    res.render('contact');

});

/* ==================================================================================== */




module.exports = router;
