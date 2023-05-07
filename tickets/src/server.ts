// File for configurating the server 
import express from 'express'
import { ticketRouter } from './routes/ticketRoutes';

// const app = require('express')()
// const eventRouter = require('./routes/ticketRoutes')


const app = express();
app.use(express.json())
app.use(ticketRouter)

export default app