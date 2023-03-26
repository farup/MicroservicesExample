const mongoose = require('mongoose')


const ticketSchema = new mongoose.Schema({
    _id: { type: String },
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    event: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Ticket', ticketSchema)