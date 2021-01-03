const express = require('express');
const userRouter = require('./src/routers/user')
const indexRouter = require('./src/routers/index')
require('./src/db/mongoose')

const port = process.env.PORT || 3000

const app = express();

app.use(express.json());
app.use(userRouter)
app.use(indexRouter)



app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});