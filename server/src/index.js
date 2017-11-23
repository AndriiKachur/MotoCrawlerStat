const mongo = require('mongodb'),
    path = require('path'),
    MongoClient = mongo.MongoClient,
    express = require('express'),
    assert = require('assert'),
    url = 'mongodb://127.0.0.1:27017/motos';

let db = null,
    motoCollection = null,
    app = express();


MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);

    db = db;
    motoCollection = db.collection('motos');

    console.log("DATABASE connected correctly to MongoDB server.");
});



app.use(express.static(path.join(__dirname, '../../web/motocrawlerstat/dist/')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../web/motocrawlerstat/dist/index.html'));
});

app.get('/allMotoDistribution', async function (req, res) {
    let resp = await motoCollection.aggregate([
        {
          $match: {isActive: true}
        },
        {
            $group: {
                _id: '$manufacture',
                count: {$sum: 1}
            }
        },
        {
            $match: {count: {$gt: 10}}
        }
    ]).toArray();

    res.send(resp);
});

app.listen(3000);