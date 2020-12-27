const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const userRouter = require('./routes/user')
require('./db/mongoose')


const indexRouter = require('./routes/index');
const port = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(userRouter)
app.use(indexRouter)


app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});