var express = require('express');
var router = express.Router();
const skillsCtrl =require('../controllers/skills');

/* GET users listing. */
//router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
//});

// all actual paths start with '/skills'
router.get('/', skillsCtrl.index);

// getting skills by id
router.get('/:id', skillsCtrl.show);

module.exports = router;
