var express = require('express')
var redis = require('redis')
var app = express()
var client = redis.createClient()

app.get('/', function(req, res) {
	// client.set("visitors", 0)
	client.lpush("visitors", req.ip, function(err, reply){
		res.send('<p>You are visitor # ' 
			+ reply + ' and your IP is: ' 
			+ req.ip + '</p>')
	})
})

app.get('/most-recent', function(req, res){
	client.lindex("visitors", 0, function(err, visitorCount){
		res.send("The most recent was IP: " + visitorCount)
	})
})

app.listen(3000)
