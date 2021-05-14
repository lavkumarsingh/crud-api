const express = require('express')
const router = express.Router();

// routes
const route = require('../controller/controller')

router.get('/', route.index)

router.post('/create-user', route.createUser)

router.put('/update-user/:id', route.updateUser)

router.delete('/delete-user/:id', route.deleteUser)

module.exports = router