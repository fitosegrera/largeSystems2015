var express = require('express')
var redis = require('redis')
var app = express()
var client = redis.createClient()

app.get('/', function(req, res) {
	// client.set("visitors", 0)
	client.incr("visitors", function(err, reply){
		res.send('<p>You are visitor # ' + reply + '</p>')
	})	
})

app.listen(3000)
