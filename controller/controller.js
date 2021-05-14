
const { db } = require('../model/schema')
const UserDB = require('../model/schema')

exports.index = function(req, res) {
    try {
        UserDB.find()
        .then(user => {
            res.json(user).sendStatus(200)
        })
    } catch(err) {
        console.error(err)
    }
}

// create user
exports.createUser = async function(req, res) {
    if(!req.body) {
        res.json({ status: 404 })
    }

    let user = new UserDB({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    try {
        const userSaved = await user.save()
            .then(res.sendStatus(200))
    } catch(err) {
        console.error(err);
    }
}

// update user
exports.updateUser = function(req, res) {

    try {
        UserDB.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
            .then(res.sendStatus(200))
    } catch(err) {
        console.error(err);
    }
}

// delete user
exports.deleteUser = function(req, res) {

    try {
        UserDB.findByIdAndRemove(req.params.id)
            .then(res.sendStatus(200))        
    } catch(err) {
        console.error(err)
    }
}