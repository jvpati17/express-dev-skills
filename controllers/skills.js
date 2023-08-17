const skills = require('../models/skill');

module.exports = {
index,
show
};


function index(req, res) {
    res.render('skills/index', {
        skills: skills.getAll()
    });
}
function show(req, res) {
    res.render('skills/show', {
      skills: skills.getOne(req.params.id),   
    });
}