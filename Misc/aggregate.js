/*
// Requires official Node.js MongoDB Driver 3.0.0+
var mongodb = require("mongodb");
var client = mongodb.MongoClient;
var url = "mongodb://host:port/";
client.connect(url, function (err, client) {
    var db = client.db("ICCC");
    var collection = db.collection("AlarmVideo");
    var options = {
        allowDiskUse: false
    };
    var pipeline = [
        {
            "$match": {}
        }
    ];
    var cursor = collection.aggregate(pipeline, options);
    cursor.forEach(
        function(doc) {
            console.log(doc);
        },
        function(err) {
            client.close();
        }
    );
    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/
});

// Requires official Node.js MongoDB Driver 3.0.0+
var mongodb = require("mongodb");
var client = mongodb.MongoClient;
var url = "mongodb://host:port/";
client.connect(url, function (err, client) {
    var db = client.db("ICCC");
    var collection = db.collection("SummarizeData");
    var options = {
        allowDiskUse: false
    };
    var pipeline = [
        {
            "$group": {
                "$Year": "$Year"
            }
        }
    ];
    var cursor = collection.aggregate(pipeline, options);
    cursor.forEach(
        function(doc) {
            console.log(doc);
        },
        function(err) {
            client.close();
        }
    );
    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/
});

var mongodb = require("mongodb");
var client = mongodb.MongoClient;
var url = "mongodb://host:port/";
client.connect(url, function (err, client) {
    var db = client.db("hmis");
    var collection = db.collection("staff");
    var options = {
        allowDiskUse: false
    };
    var pipeline = [
        {
            "$match": {
                "name": {
                    "$ne": null
                },
                "experience_year": {
                    "$lte": 10.0
                },
                "gender": {
                    "$exists": true
                }
            }
        },
        {
            "$group": {
                "_id": "$gender",
                "total": {
                    "$sum": 1.0
                }
            }
        },
        {
            "$sort": {
                "gender": -1.0
            }
        }
    ];
    var cursor = collection.aggregate(pipeline, options);
    cursor.forEach(
        function(doc) {
            console.log(doc);
        },
        function(err) {
            client.close();
        }
    );
    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/
});
*/