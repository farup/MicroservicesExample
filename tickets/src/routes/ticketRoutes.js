const { Router } = require('express');

const events = []
const ticketRouter = Router()


// Home 
// req is incoming data, res is data sent back to client.
ticketRouter.get('/', (req, res) => {
    res.send('Welcome. Get, add, delete and test out with tickets/!')
})


ticketRouter.get('/addevent', async (req, res) => {
    events.push(req.query.name)
})


ticketRouter.get('/deleteevent', async (req, res) => {

})


ticketRouter.get('/events', async (req, res) => {
    res.status(200).json(events)
})

module.exports = ticketRouter