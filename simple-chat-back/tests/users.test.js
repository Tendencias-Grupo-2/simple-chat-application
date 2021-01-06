const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/userModel')
const mongoose = require('mongoose')

const {userOneId, userOne, setupDatabase} = require("./fixtures/db")

beforeEach(async () => {
    await setupDatabase()
 })
 afterAll(done => {
    mongoose.connection.close()
    done()
  })

 test('Should create new user', async()=>{
     const response = await request(app)
     .post('/users')
     .send({
        username: 'Test User'
     })
     .expect(201)
     const user = await User.findById(response.body._id)
     expect(user.username).toBe('Test User')
 })
 test('Should find user by id', async() =>{
     const response = await request(app)
     .get('/users')
     .send({
         _id: userOneId
     })
     .expect(200)
     const user = await User.findById(response.body._id)
     expect(user.username).toBe(userOne.username)
 })