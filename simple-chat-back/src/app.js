const express = require('express');
const userRouter = require('../src/routers/user')
const indexRouter = require('../src/routers/index')
require('./db/mongoose')

const app = express();

app.use(express.json());
app.use(userRouter)
app.use(indexRouter)

module.exports = app