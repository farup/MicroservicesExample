// File for configurating the server 

const app = require('express')()
const eventRouter = require('./routes/ticketRoutes')



app.use(eventRouter)


module.exports = app