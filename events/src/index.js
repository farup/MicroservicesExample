const server = require('./server')
const dbConnection = require('./config/dbConnection')

const PORT = process.env.PORT || 9001


const startServer = () => {
    server.listen(PORT, () =>
        console.log(`Event server running at http://localhost:${PORT}`))
}

startServer()
// dbConnection()

