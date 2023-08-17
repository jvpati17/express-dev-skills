var express = require('express');
var router = express.Router();
const skillsCtrl =require('../controllers/skills');

/* GET users listing. */
// all actual paths start with '/skills'
//router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
//});
router.get('/', skillsCtrl.index);

module.exports = router;
