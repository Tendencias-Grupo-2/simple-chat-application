const mongoose = require('mongoose')
const User = require('../../src/models/userModel')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    username: 'Emilio'
}
const setupDatabase = async () => {
    await User.deleteMany()
    await new User(userOne).save()
}
module.exports = {
    userOneId,
    userOne,
    setupDatabase
}
