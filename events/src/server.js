// File for configurating the server 

const app = require('express')()
const eventRouter = require('./routes/eventRoutes')



app.use(eventRouter)


module.exports = app