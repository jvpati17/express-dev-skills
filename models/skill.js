const skills = [
    {id: 123, skill: 'Express Generator'},
    {id: 456, skill: 'Best Practice Routing'},
    {id: 789, skill: 'RESTful Routing'}

];

module.exports = {
    getAll,
    getOne,
    create,
    deleteNewSkill 
};

function deleteNewSkill(id) {
    id = parseInt(id);
const idx = skills.findIndex(skill => skill.id === id);
skills.splice(idx, 1);
}


function create(skill) {
// adding id
skill.id = Date.now() % 1000000;
skills.push(skill);
}

function getAll() {
    return skills;
}
function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}
