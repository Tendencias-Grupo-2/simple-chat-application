const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({

	user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        trim: true
    },
    text:{
        type: String,
        required: true,
        trim: true
        
    }
},
    {timestamps: true}
)

const Message = mongoose.model('Message', messageSchema )
module.exports = Message

