const { Schema, model } = require('mongoose')

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
})

const UserModel = model('User', User)

module.exports = UserModel