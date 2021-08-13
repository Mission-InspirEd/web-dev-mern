const express = require('express')
const router = express.Router()
const Message = require('../messageSchema')

router.post('/message', function (req, res) {
    const newMessage = new Message({
        message: req.body.message,
        poster: req.body.poster,
        recipients: req.body.recipients,
        prevMsg: req.body.prevMsg,
        nextMsg: req.body.nextMsg,
    })

    newMessage.save()
    res.send('success')
})

router.get('/message', function (req, res) {
    Message.find({})
    .then((docs) => res.send(docs))
})

module.exports = router