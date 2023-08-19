var express = require('express');
var router = express.Router();
const skillsCtrl =require('../controllers/skills');

/* GET users listing. */
//router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
//});

// all actual paths start with '/skills'
router.get('/', skillsCtrl.index);
//getting skills/new
router.get('/new', skillsCtrl.new)
// getting skills by id
router.get('./:id', skillsCtrl.show);
// POST new skills POST/todos
router.post('/', skillsCtrl.create);
// delete request /skills/:id
router.delete('/:id', skillsCtrl.delete);


module.exports = router;
