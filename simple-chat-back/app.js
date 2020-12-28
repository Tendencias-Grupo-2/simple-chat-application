const express = require('express');
const userRouter = require('./routes/user')
require('./db/mongoose')


const indexRouter = require('./routes/index');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(userRouter)
app.use(indexRouter)


app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});