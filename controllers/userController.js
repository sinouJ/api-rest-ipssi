const UserModel = require('../models/User')

module.exports = {
    getUsers: (req, res) => {

        const users = [
            {
                id: 1,
                name: 'John Doe',
            },
            {
                id: 2,
                name: 'Jane Doe',
            }
        ]

        res.status(200).json({
            users: users
        })
    },
    createUser: (req, res) => {
        const User = new UserModel({
            name: req.body.name,
            age: req.body.age
        })

        User.save( (err, user) => {
            if (err) {
                res.status(500).json({
                    message: err
                })
            }
            else {
                res.status(201).json({
                    status: 201,
                    message: "succes",
                    user: user
                })
            }
        })
    }
}