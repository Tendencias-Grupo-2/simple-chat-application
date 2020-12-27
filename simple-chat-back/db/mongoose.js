const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:dbUserPassword@tpf-backend.e4kq0.mongodb.net/chat-backend?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', ()=>{
    console.log('Jevi')
})
