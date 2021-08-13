const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
    message: {type: String, required: true},
    poster: {type: String, required: true},
    recipients: {type: [String]},
    prevMsg: {type: String},
    nextMsg: {type: String},
    dateCreated: {type: Date, default: new Date()}
})

const Message = mongoose.model('Message', messageSchema)
module.exports = Message
