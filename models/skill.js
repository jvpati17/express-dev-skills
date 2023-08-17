const skills = [
    {id: 123, skill: 'Express Generator'},
    {id: 456, skill: 'Best Practice Routing'},
    {id: 789, skill: 'RESTful Routing'}

];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}
function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}