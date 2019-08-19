const router = require('express').Router()
const db = require('../../data/dbConfig')

router.get('/', async (req, res) => {
    try {
        const resources = await db('resources')
        res.json(resources)
    } catch (e) {
        res.status(500).json({
            error: 'Error, could not get resources', e
        })
    }
})

router.post('/', async (req, res) => {
    const { name, description } = req.body

    if (!name) {
        return res.status(400).json({
            error: 'Name property is required!'
        })
    }
    try {
        const [id] = await db('resources').insert({ name, description })
        const [resource] = await db('resources').where({ id })
        res.status(201).json(resource)
    } catch (e) {
        res.status(500).json({
            error: 'Error, could not add resource', e
        })
    }
})

module.exports = router