const router = require('express').Router()
const db = require('../../data/dbConfig')

router.get('/', async (req, res) => {
    try {
        const resources = await db('project_resources')
        res.json(resources)
    } catch (e) {
        res.status(500).json({
            error: 'Error, could not get project resources', e
        })
    }
})

router.post('/', async (req, res) => {
    const { project_id, resource_id } = req.body
    if (!project_id || !resource_id) {
        console.log(req.body)
        return res.status(400).json({
            error: 'project_id and resource_id properties are required!'
        })
    }
    try {
        const [id] = await db('project_resources').insert({ project_id, resource_id })
        const [resource] = await db('project_resources').where({ id })
        res.status(201).json(resource)
    } catch (e) {
        console.log(req.body)
        res.status(500).json({
            error: 'Error, could not add resource', e
        })
    }
})

module.exports = router