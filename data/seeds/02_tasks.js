exports.seed = function (knex) {
    return knex('tasks').insert([
        { description: 'Take supports down', notes: 'Be careful the roof doesnt collapse', completed: false, project_id: 1 },
        { description: 'Knock down one wall at a time', notes: 'Start with front wall', completed: true, project_id: 1 },
        { description: 'Sand blast the fence', notes: 'Gotta remove the paint', completed: false, project_id: 2 },
        { description: 'Gather all paint supplies', notes: 'Shake the paint well before painting', completed: true, project_id: 2 },
    ])
}