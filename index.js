const express = require('express')

// Routers
const streamRouter = require('./stream/router')

// Middleware
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

// Models & DB
const db = require('./db')

// Init
const app = express()
const port = process.env.PORT || 5000


app
  .use(jsonParser)
  .use(streamRouter)
  .get('/', (req, res) => {
    res.status(200)
    res.send('hey you!')
  })
  .listen(port, () => console.log(`listening on port ${port}`))
