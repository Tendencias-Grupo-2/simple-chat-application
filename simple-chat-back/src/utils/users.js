const users = []

const addUser = ({id, username, room}) => {
  if(!username || !room){
    return{
        error: 'username and room are required'
    }
  }  
  
  username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    const existingUser = users.find((user)=>user.room === room && user.username === username)
    if(existingUser){
        return {
            error: "username is alredy in use in this sesion"
        }
    }
    const user = {id, username, room}
    users.push(user)
    return {user}
}

const removeUser = (id) => {
   const index = users.findIndex((user)=> user.id === id) 
   if(index !== -1){
       return users.splice(index, 1)[0]
   }
}
const getUser = (id) => users.find((user)=> user.id === id)

const getUserInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports = {
    getUser,
    getUserInRoom,
    removeUser,
    addUser
}