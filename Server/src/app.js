const express = require("express");
const cors = require('cors')

const planetsRouter = require('./routes/Planets/planets.router')

const app = express();

//this will allow localhost:3000 to access data from our server
//there is also whitelisting for multiple origins
app.use(cors({
    origin:'http://localhost:3000'
}))
app.use(express.json())
app.use(planetsRouter)
// app.use((req, res, next) => {
//     res.send(planetsRouter)
//     next()
// })

module.exports = app

