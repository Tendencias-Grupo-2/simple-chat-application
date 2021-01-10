const express = require('express')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')
const {generateMessage} = require('./utils/messages')
const { getUser, getUserInRoom, removeUser, addUser } = require('./utils/users')
require('./db/mongoose')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const updateRoomData = (user) =>{
    io.to(user.room).emit('roomData', {
        room: user.room,
        users: getUserInRoom(user.room)
    })
}

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) =>{
   
    socket.on('join', ({username, room}, callback)=>{
       const {error, user}= addUser({id: socket.id, username, room})
       if(error){
        return callback(error)
       }
        socket.join(user.room)
        socket.emit('message', generateMessage('ChatApp', `Welcome ${user.username}`))
        socket.broadcast.to(user.room).emit('message', generateMessage("ChatApp",`${user.username} has joined!`))
        updateRoomData(user)
        callback()
    })

    socket.on('sendMessage', (message)=>{
        const user = getUser(socket.id)
        io.to(user.room).emit('message', generateMessage(user.username, message))
    })
    socket.on('disconnect', () => {
        const user = removeUser(socket.id)
        if(user){
            io.to(user.room).emit('message', generateMessage('ChatApp',`${user.username} has left!`))
           updateRoomData(user)
        }
    })
})

server.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`)
  })