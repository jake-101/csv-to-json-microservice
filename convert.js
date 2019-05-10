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
  let arr = []
csv()
.fromString(req.body)
.subscribe((json,lineNumber)=>{
    console.log(lineNumber, 'line number')
arr.push(json)  }
,onError, onComplete)

function onComplete() {
  res.set('Content-Type', 'application/json')
  res.status(200).send(JSON.stringify(arr, null, 4))
}

function onError() {

  console.log('error')
}


})

// app.all('*', (req, res) => {
//   res.status(405).send({ error: 'only POST requests are accepted' })
// })