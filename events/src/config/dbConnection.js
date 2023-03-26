const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONDODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB online');

    } catch (error) {
        console.log(error);
        throw new Error(`Failed connectiong to DB ${process.env.MONDODB_URL}`);
    }
}

module.exports = dbConnection
