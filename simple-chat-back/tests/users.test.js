// const request = require('supertest')
// const app = require('../src/app')
// const Message = require('../src/models/messageModel')
// const mongoose = require('mongoose')

// const {userOneId, userOne, setupDatabase} = require("./fixtures/db")

// beforeEach(async () => {
//      await setupDatabase()
//   })
//   afterAll(done => {
//      mongoose.connection.close()
//      done()
//    })

//   test('Should create new message', async()=>{
//     const Modelmessage = new Message({user: 'Test User', message: 'Hello', room: '01' })
//     Modelmessage.save()  
//     const user = username.find(Modelmessage)
//     expect(user.username).toBe('Test User')

    // const response = await request(server)
    //   .post('/users')
    //   .send({
    //      username: 'Test User'
    //   })
    //   .expect(201)
    //   const user = await User.findById(response.body._id)
//  })

//  test('Should find user by id', async() =>{
//      const response = await request(server)
//      .get('/users')
//      .send({
//          _id: userOneId
//      })
//      .expect(200)
//      const user = await User.findById(response.body._id)
//      expect(user.username).toBe(userOne.username)
//  })

test('Should return true', () =>{
    expect(1).toEqual(1)
})