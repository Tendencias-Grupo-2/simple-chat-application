const { addUser, getUser, removeUser, getUserInRoom } = require("../src/utils/users")

describe('Add user tests', () => {
  const userProperties = {
    id: "011122",
    username: "username",
    room: "room_0"
  }

  it('should add an user', () => {
    expect(addUser(userProperties)).toEqual({user: userProperties})
  })

  it('is required to add username and room fields', () => {
    expect(addUser({})).toEqual({error: "username and room are required"})
  })

  it('should return error on adding existing user', () => {
    addUser(userProperties)
    expect(addUser(userProperties)).toEqual({error: "username is alredy in use in this sesion"})
  })
  
  it('should be able to get a saved used', () => {
    addUser(userProperties)
    expect(getUser(userProperties.id)).toEqual(userProperties)
  })

  it('be able to remove user', () => {
    addUser(userProperties)
    expect(getUser(userProperties.id)).toEqual(userProperties)
    
    removeUser(userProperties.id)
    expect(getUser(userProperties.id)).toEqual(undefined)
  })

  it('should be able to get all users within a room', () => {
    const userProperties1 = {
      id: "011122",
      username: "username",
      room: "room_0"
    }
    const userProperties2 = {
      id: "011122",
      username: "username1",
      room: "room_0"
    }
    const userProperties3 = {
      id: "011122",
      username: "username2",
      room: "room_1"
    }
        
    addUser(userProperties1)
    expect(getUser(userProperties.id)).toEqual(userProperties)
  
    addUser(userProperties2)
    expect(getUser(userProperties.id)).toEqual(userProperties)
  
    addUser(userProperties3)
    expect(getUser(userProperties.id)).toEqual(userProperties)
    
    expect(getUserInRoom("room_0").length).toEqual(2)

    expect(getUserInRoom("room_0")).toEqual(
      expect.not.arrayContaining([userProperties3])
    )
  })
})