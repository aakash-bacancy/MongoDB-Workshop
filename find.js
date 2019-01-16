var mongo = require('mongodb').MongoClient
const assert = require('assert')
var age = Number(process.argv[2])
var url='mongodb://localhost:27017/learnyoumongo';
const client = new mongo(url);
   
    client.connect(function(err){
    	assert.equal(null,err);
    	//console.log("connected");
    	const db = client.db('learnyoumongo');
    	db.collection("parrots").find({'age': { $gt: +age}}).toArray(function(err,result){
    		assert.equal(null,err);
    		
    		
    			console.log(result);
    		
    	})
    	client.close();

    })