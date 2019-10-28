const {Router} = require('express')
const Chatroom = require('./model')
const Sse = require('json-sse')

const router = new Router()
const stream = new Sse()

router.get('/stream', async (req, res, next) => {
  console.log('got a req on /stream')
  // res.status(200) ==> do not use it in the stream!, steam should handle connection
  // res.send('works')
  const messages = await Chatroom.findAll()
  const data = JSON.stringify(messages)
  console.log('messages in db', data)

  stream.updateInit(data) // put the data in the stream
  stream.init(req, res)   // starts the stream
})

// router.post('/message', async (req, res, next) => {
//   console.log('request body:', req.body)
//   Chatroom.create(req.body)
//     .then(chatroom => res.json(chatroom))
//     .catch(next)

//   const messages = await Chatroom.findAll()
//   const data = JSON.stringify(messages)
//   stream.send(data) // update the stream ==> last message is not in here
// })

router.post('/message', async (req, res, next) => {
 console.log('hoi')
  const {message} = req.body
 const entity = await Chatroom.create({
   message: message
 })
 const messages = await Chatroom.findAll()
 const data = JSON.stringify(messages)
 stream.send(data) // update the stream

 res.status(201)
 res.send(entity)
})

module.exports = router
