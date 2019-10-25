const express = require('express')
const db = require('./db')
const streamRouter = require('./stream/router')

const app = express()

const port = process.env.PORT || 5000


app.get('/', (req, res) => {
  res.status(200)
  res.send('hey you!')
})

app.use(streamRouter)
app.listen(port, () => console.log(`listening on port ${port}`))