exports.seed = function (knex) {
    return knex('projects').insert([
        { name: 'Demo Shed', description: 'Tear down shed in back yard', completed: false },
        { name: 'Paint fence', description: 'Paint outer fence in front yard', completed: false },
        { name: 'Make Garden', description: 'Get the garden ready and plant', completed: true },
    ])
}