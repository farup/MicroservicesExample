const { Router } = require('express');
const { getIpAddress } = require('../networking/ipAddress')


const events = []
const eventRouter = Router()


// Home 
// req is incoming data, res is data sent back to client.
eventRouter.get('/', (req, res) => {
    res.send('Welcome. Get, add, delete and test out with events/!!').json(ip)

})

eventRouter.get('/addevent', async (req, res) => {

    events.push(req.query.name)

})

eventRouter.get('/deleteevent', async (req, res) => {

})


eventRouter.get('/events', async (req, res) => {
    res.status(200).json(events)
})

module.exports = eventRouter