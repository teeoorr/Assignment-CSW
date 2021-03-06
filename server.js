var express = require('express'),
	app = express(),
	router = express.Router(),
	bodyParser = require('body-parser')
  
var We=[];
var We1=[];
app.use(express.static('public')) 

function randomString(length) {
	var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

router.route('/wes1/:booking_id') 
	.get( function(req,res) {
		for (var i in We)
	{
		if (We[i].booking.bookingnumber == req.params.booking_id)
			res.json(We[i])
	}		
	res.json({});
	})

router.route('/wes') 
	.get( function(req,res) {
		res.json(We);
	})

	.post(function(req, res) { 
	    var we = {}; 
	    we.name = req.body.name
	    we.number = req.body.number
	    we.telephone = req.body.telephone
		we.email = req.body.email
	    we.adult = req.body.adult
	    we.conlist = req.body.conlist
	    we.booking = req.body.price
	    we.booking.bookingnumber = randomString(10)
	    we.process = 'Processing'
	    we.total = req.body.adult*req.body.price.price
	    We.push(we); 
	    res.json({bookingnumber:we.booking.bookingnumber,
	    					name:we.name,
	    					total:we.total,
	    				    adult:we.adult})
	})

router.route('/wes2') 
	.get( function(req,res) {
		res.json(We1);
	})

	.post(function(req, res) { 
	    var we1 = {}; 
	    we1.book1 = req.body.book1
	    we1.name1 = req.body.name1
	    we1.price1 = req.body.price1
		we1.transfer1 = req.body.transfer1
	    we1.date1 = req.body.date1
	    we1.banklist1 = req.body.banklist1
	    We1.push(we1); 
	    res.json({book1:we1.book1,
	    		name1:we1.name1,
	    		price1:we1.price1,
	    		transfer:we1.transfer1,
				date1:we1.date1,
 				banklist:we1.banklist1 })
	})

router.route('/wes') 
	.get( function(req,res) {
		res.json(We);
	})

	.post(function(req, res) { 
	    var we = {}; 
	    we.name = req.body.name
	    we.number = req.body.number
	    we.telephone = req.body.telephone
		we.email = req.body.email
	    we.adult = req.body.adult
	    we.conlist = req.body.conlist
	    we.booking = req.body.price
	    we.booking.bookingnumber = randomString(10)
	    we.process = 'Processing'
	    we.total = req.body.adult*req.body.price.price
	    We.push(we); 
	    res.json({bookingnumber:we.booking.bookingnumber,
	    					name:we.name,
	    					total:we.total,
	    				    adult:we.adult})
	})
  
router.route('/wes/:we_id')
	.get(function(req,res){
		res.json(wes[req.params.we_id] )
	})

	.put(function(req,res){
		var id = req.params.we_id
		wes[id].name = req.body.name
		wes[id].number = req.body.number
		wes[id].telephone = req.body.telephone
		wes[id].email = req.body.email
	    wes[id].adult = req.body.adult
	    wes[id].conlist = req.body.conlist

	})

	.delete(function(req,res){
		var id = req.params.we_id
		delete wes[id]
	})


app.use('/api', bodyParser.json(), router)

app.listen(50030, function() {
	console.log('Server is running...')
})
