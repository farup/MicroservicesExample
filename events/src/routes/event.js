const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    _id: String,
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    tickets: {
        type: Number,
        required: true,
    },
    soldTickets: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Event', eventSchema)