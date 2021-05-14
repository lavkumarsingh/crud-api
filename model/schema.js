const mongoose = require('mongoose')
const { Schema } = mongoose

  const schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    gender: String,
    status: String
  });

  module.exports = mongoose.model('users', schema)