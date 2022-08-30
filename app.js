const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello. This is my new coding project')
})

app.listen(process.env.PORT ||3000,
     console.log("Server is running"))