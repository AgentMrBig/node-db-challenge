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

module.exports = router