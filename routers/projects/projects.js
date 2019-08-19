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

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        let [project] = await db('projects').where({ id })

        if (!project) {
            return res.status(404).json({
                error: `Project with id: ${id}, does not exist`
            })
        } else {
            const tasks = await db('tasks').where({ project_id: id })
            const resources = await db('resources')
                .whereIn('id', function () {
                    this.select('resource_id')
                        .from('project_resources')
                        .where({ project_id: id })
                })
            project = { ...project, tasks, resources }
            return res.json(project)
        }
    } catch (e) {
        res.status(500).json({
            error: 'Error, could not get project!', e
        })
    }
})

module.exports = router