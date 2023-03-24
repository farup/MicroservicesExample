const server = require('./server')

const PORT = process.env.PORT || 8082


const startServer = () => {
    server.listen(PORT, () =>
        console.log(`Event server running at http://localhost:${PORT}`))
}

startServer()

