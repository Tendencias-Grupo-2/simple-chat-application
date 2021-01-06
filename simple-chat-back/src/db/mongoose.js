const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

let connectionString;
if (process.env.NODE_ENV  === 'development') {
  connectionString = process.env.MONGODB_CONNECTION_STRING_TEST; 
} 
else {
  connectionString = process.env.MONGODB_CONNECTION_STRING; 
}

mongoose.connect(connectionString,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify: false,
    useUnifiedTopology: true
})