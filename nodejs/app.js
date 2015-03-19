var express = require('express')
var app = express()

var visitorCounter = 0;

app.get('/', function (req, res) {
  res.send('You are visitor #: ' + visitorCounter)
  visitorCounter++
})

app.get('/foobar', function (req, res) {
  res.send('You are now at foobar')
})

//This function uses regular expressions to recieve any request at the address: ip.add.ress:3000/user/whatever
app.get(/\/user\/[a-zA-Z0-9]+/, function (req, res) {
  //res.send(Object.keys(req))
  res.send(req.url)
})

app.listen(3000)