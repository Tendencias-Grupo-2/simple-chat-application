const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', ()=>{
    console.log('Connected')
})
