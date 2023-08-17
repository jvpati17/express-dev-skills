const skills = [
    {id: 123, skill: 'Express Generator'},
    {id: 456, skill: 'Best Practice Routing'},
    {id: 789, skill: 'RESTful Routing'}

];

module.exports = {
    getAll
};

function getAll() {
    return skills;
}