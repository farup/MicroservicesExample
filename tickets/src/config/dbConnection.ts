import mongoose from "mongoose";

const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb://tickets-mongo-service:27017/tickets');
        console.log('DB online');

    } catch (error) {
        console.log(error);
        throw new Error(`Failed connectiong to DB ${process.env.MONDODB_URL}`);
    }
}

export { dbConnection }
