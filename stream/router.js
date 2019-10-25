const {Router} = require('express')

const router = new Router()

router.get('/stream', (req, res, next) => {
  console.log('got a req on /stream')
  res.status(200)
  res.send('works')
})

module.exports = router
