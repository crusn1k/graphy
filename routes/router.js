var express = require('express');
var router = express.Router();
var percentCompleted = 0;
/* GET home page. */
var ips = new Set();
router.get('/', function(req, res, next) {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    ips.add(ip);
    res.render('index', { title: 'My Site' });
});

router.get('/list-users', function(req, res, next) {    
    console.log(ips);
    res.render('index', { title: 'My Site' });
});

router.get('/progress', function(req, res, next) {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    ips.add(ip);
    res.render('progress', { title: 'My Site - Progress example.' });
});

router.get('/get-percent-completed', function(req, res, next) {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    ips.add(ip);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ percentCompleted: ++percentCompleted }));
});

module.exports = router;
