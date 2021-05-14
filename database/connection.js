const mongoose = require('mongoose')
const { proppatch } = require('../routes/routes')
require('dotenv').config();

const port = process.env.MONGOURI

const connection = async() => {
    try {
        const con = await mongoose.connect(port, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
        })

        console.log('database connected');
    } catch(err) {
        console.error(err)
        process.exit(1)
    }
}

module.exports = connection