// modules
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const connection = require('./database/connection')

// connection
const connectDB = require('./database/connection')

// config
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8080

// router
const userRouter = require('./routes/routes')

// log request
app.use(morgan('tiny'))

// parse request
app.use(express.urlencoded({ extended:true }))
app.use(express.json())

// mongo connection
connection();

// api
app.use('/', userRouter)

app.listen(port, (req, res) => {
    console.info(`Current client URL ::: http://127.0.0.1/${port}`);
    console.info(`Network URL ::: http://192.168.29.85/${port}`);
})