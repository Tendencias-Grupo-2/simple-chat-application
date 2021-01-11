const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    }
})

userSchema.virtual('messages',{
    ref: "Message",
    localField: '_id',
    foreignField: 'username'
})

const User = mongoose.model('User', userSchema)
module.exports = User