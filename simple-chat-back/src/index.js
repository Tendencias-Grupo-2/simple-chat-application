const express = require('express')
const path = require('path')
const http = require('http')
const cors = require('cors')
const socketio = require('socket.io')
const { generateMessage } = require('./utils/messages')
const { getUser, getUserInRoom, removeUser, addUser } = require('./utils/users')
const {
  emitRoomData,
  emitConnection,
  emitJoin,
  emitMessage,
  emitSendMessage,
  emitDisconnect,
  emitExitRoom
} = require('./utils/constants')
require('./db/mongoose')

const app = express()
const server = http.createServer(app)
const io = socketio(server)
const Message = require('./models/messageModel')

const updateRoomData = (user) => {
  io.to(user.room).emit(emitRoomData, {
    room: user.room,
    users: getUserInRoom(user.room)
  })
}

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

io.on(emitConnection, (socket) => {
  socket.on(emitJoin, ({ username, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, username, room })
    if (error) {
      return callback(error)
    }
    socket.join(user.room)
    socket.emit(emitMessage, generateMessage('ChatApp', user.username))
    socket.broadcast
      .to(user.room)
      .emit(emitMessage, generateMessage('ChatApp', user.username))
    updateRoomData(user)
    callback()
  })

  socket.on(emitSendMessage, (message) => {
    const user = getUser(socket.id)
    io.to(user.room).emit(emitMessage, generateMessage(user.username, message))
    const Modelmessage = new Message({user: user.username, message: message, room: user.room })
    Modelmessage.save(function(err) {
      if (err) return console.error(err);
      console.log("Added succussfully!")
    })
  })

  socket.on(emitDisconnect, () => {
    const user = removeUser(socket.id)
    if (user) {
      io.to(user.room).emit(
        emitMessage,
        generateMessage('ChatApp', user.username)
      )
      updateRoomData(user)
    }
  })

  socket.on(emitExitRoom, (currentRoom) => {
    removeUser(socket.id)
    socket.leave(currentRoom);

  });
})

app.use(cors)

server.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`)
})
