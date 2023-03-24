const os = require('os');

const getIpAddress = () => {
    const nets = os.networkInterfaces();

    const results = {};

    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4;
            if (net.family === familyV4Value && !net.internal) {
                if (!results[name]) {
                    results[name] = [];
                }
                results[name].push(net.address);
            }
        }
    }
    console.log("Result from getIP", results['eth0'])
    return results['eth0'][0];
};

const sayHi = () => {
    console.log("Hi!")
}


// module.exports.getIpAddress = { getIpAddress }
module.exports = {
    getIpAddress: getIpAddress,
    sayHi: sayHi
}

