const express = require('express');
const router = new express.Router();
const User = require("../models/userModel");

router.get("/users", async (req, res) =>{
    const _id = req.body._id
       try{
          const user = await User.findById(_id)
          if(!user){
              return res.status(404).send()
           }
          res.send(user) 
       }
       catch(error){
          res.status(500).send()
       }
  })
  router.post('/users', async (req, res) => {
    console.log(req.body)
    const user = new User(req.body)
    try{
        await user.save()
        res.status(201).send(user)
    } 
    catch(error){
        res.status(400).send(error)
    }
  })

  module.exports = router