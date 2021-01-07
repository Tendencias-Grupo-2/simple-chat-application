const mongoose = require('mongoose')

const chatroomSchema = new mongoose.Schema({
    roomname: {
        type: String,
        required: true,
        trim: true
      },
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        trim: true
    },
    text: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Text",
        required: true,
        trim: true
      }
})

const Chatroom = mongoose.model('Chatroom', chatroomSchema)

module.exports = Chatroom