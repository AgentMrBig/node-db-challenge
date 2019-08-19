const router = require('express').Router()
const db = require('../../data/dbConfig')

router.get('/', async (req, res) => {
    try {
        const projects = (await db('projects')).map(project => {
            return {
                ...project,
                completed: project.completed === 0 ? false : true
            }
        })
        res.json(projects)
    } catch (e) {
        res.status(500).json({
            error: 'Error, could not get projects', e
        })
    }
})

router.post('/', async (req, res) => {
    const { name, description, completed } = req.body
    if (!name) {
        return res.status(400).json({
            error: 'Project Name is required!'
        })
    }
    try {
        const [id] = await db('projects').insert({ name, description, completed })
        const [project] = await db('projects').where({ id })
        res.status(201).json(project)
    } catch (e) {
        res.status(500).json({
            error: 'Error, could not add the project!', e
        })
    }
})

module.exports = router