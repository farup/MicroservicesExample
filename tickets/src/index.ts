import server from "./server"
import { dbConnection } from "./config/dbConnection"

const PORT = process.env.PORT || 9002
// const SERVICE_NAME = process.env.SERVICE_NAME



const startServer = () => {
    try {
        server.listen(PORT, () =>
            console.log(`Ticket server running at http://localhost:${PORT}`))
    } catch (error) {
        console.error('Error registering with Consul:', error);
    }
}

dbConnection()
startServer()

// registerService()


