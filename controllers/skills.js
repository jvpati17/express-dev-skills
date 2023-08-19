const skills = require('../models/skill');

module.exports = {
index,
show,
new: newSkill,
create,
delete: deleteSkill 
};

function deleteSkill(req, res) {
    skills.deleteNewSkill(req.params.id);
    res.redirect('/skills');
}

function create(req, res) {
    console.log(req.body);
    //models responsible for crudding data
    skills.create(req.body);
    res.redirect('/skills');

}

function newSkill(req, res) {
    res.render('skills/new', {
        
    });
}


function index(req, res) {
    res.render('skills/index', {
        skills: skills.getAll()
    });
}
function show(req, res) {
    res.render('/show', {
      skills: skills.getOne(req.params.id),
        
    });
}