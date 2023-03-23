const express = require('express')
const ticketRouter = require('./routes/ticketRoutes')

const PORT = process.env.PORT


const app = express()
app.use(ticketRouter)


app.listen(PORT, () => console.log(`Event server running at http://localhost:${PORT}`))
