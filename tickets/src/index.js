const server = require('./server')

const PORT = process.env.PORT || 8082
const SERICE_NAME = process.env.SERICE_NAME || 'events'

const Consul = require('consul')
const consul = new Consul({ host: 'localhost', port: 8500 });


const serviceName = SERICE_NAME
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
        consul.agent.service.register(details);
        console.log('Successfully registered with Consul');
    } catch (error) {
        console.error('Error registering with Consul:', error);
    }
}

registerService()

const startServer = () => {
    try {
        server.listen(PORT, () =>
            console.log(`Event server running at http://localhost:${PORT}`))
    } catch (error) {
        console.error('Error registering with Consul:', error);
    }
}

startServer()

