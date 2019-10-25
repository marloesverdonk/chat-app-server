const {Router} = require('express')
const Chatroom = require('./model')

const router = new Router()

router.get('/stream', (req, res, next) => {
  console.log('got a req on /stream')
  res.status(200)
  res.send('works')
})

router.post('/message', (req, res, next) => {
  console.log('request body:', req.body)
  Chatroom.create(req.body)
    .then(chatroom => res.json(chatroom))
    .catch(next)
})

// router.post('/message', async (req, res, next) => {
//  const {message} = req.body
//  const entity = await Chatroom.create({
//    message: message
//  })
//  res.status(201)
//  res.send(entity)
// })

module.exports = router
