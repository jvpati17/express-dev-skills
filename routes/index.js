var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Developer Skills' });
});

//router.get('/:')



module.exports = router;
