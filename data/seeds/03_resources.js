exports.seed = function (knex) {
    return knex('resources').insert([
        { name: 'Hammer', description: 'Big ol Hammer' },
        { name: 'Crow Bar', description: 'For prying and pulling nails' },
        { name: 'Paint Roller', description: 'For rolling on paint' },
        { name: 'Sand Blaster', description: 'For removing paint' },
        { name: 'White Paint', description: 'Paint that is white in color' },
    ])
}