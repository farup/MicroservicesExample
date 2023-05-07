const server = require('./server')
const dbConnection = require('./config/dbConnection')

const PORT = process.env.PORT || 9002
const SERVICE_NAME = process.env.SERVICE_NAME

const Consul = require('consul')
// const consul = new Consul({ host: '127.0.0.1', port: 8500, promisify: true });
const consul = new Consul();


console.log("-----This is from index.js Tickets!-----")
const ab = async () => {
    return await consul.acl.replication()
    console.log(a)
    console.log("wha the fuck")
}
asd = ab()
console.log(asd)
console.log("------------------")

const serviceName = SERVICE_NAME
const servicePort = PORT
const healthCheckUrl = `http://localhost:${PORT}/health`;
const healthCheckInterval = '10s';

const check = {
    http: healthCheckUrl,
    interval: healthCheckInterval,
};

const details = {
    name: serviceName,
    port: servicePort,
    check: check,
};

// register consul
function registerService() {
    try {
        consul.agent.service.register({
            name: SERVICE_NAME,
            address: 'localhost',
            port: PORT
        });
        console.log('Successfully registered with Consul');
    } catch (error) {
        console.error('Error registering with Consul:', error);
    }
}

const startServer = () => {
    try {
        server.listen(PORT, () =>
            console.log(`Ticket server running at http://localhost:${PORT}`))
    } catch (error) {
        console.error('Error registering with Consul:', error);
    }
}



startServer()
dbConnection()
registerService()


