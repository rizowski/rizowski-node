var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
//  console.log(req);
//  if(req.get('host') != 'rizowski.net')
    //console.log(req.get('host'));
    res.redirect('http://blog.rizowski.net');
//  res.render('index', { title: 'Rizowski.net' });
});

module.exports = router;
