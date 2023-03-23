const express = require('express')
const eventRouter = require('./routes/eventRoutes')

const PORT = process.env.PORT


const app = express()
app.use(eventRouter)


app.listen(PORT, () => console.log(`Event server running at http://localhost:${PORT}`))
