'use strict'

const express = require('express')
const csv = require('csvtojson/v2')
const bodyParser = require('body-parser')

const app = express()
module.exports = app

app.use(bodyParser.text({ type: 'text/plain' }))


app.post('*', (req, res) => {
  if (req.body == null) {
    return res.status(400).send({ error: 'no data in the request' })
  }
  console.log(req)
csv()
.fromString(req.body)
.then((jsonObj)=>{
  console.log(jsonObj);
  res.set('Content-Type', 'application/json')
  res.status(200).send(JSON.stringify(jsonObj, null, 4))

})

})

// app.all('*', (req, res) => {
//   res.status(405).send({ error: 'only POST requests are accepted' })
// })