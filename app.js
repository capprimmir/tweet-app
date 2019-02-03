var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());


// prepopulated tweets that will exist after stopping server
var tweets = [
    {text: "Hello from Tweet App", time: new Date().getTime() - 12300},
    {text: "Cool App", time: new Date().getTime()}
];

// tell which directory to get files
app.use(express.static(__dirname + '/web'));


//get prepopulated tweets
app.get('/ajax', (req, res) => {
    res.type('json');
    res.end(JSON.stringify({tweets:tweets}));
});

app.post('/ajax', (req, res) => {
    var newTweet = {text: req.body.tweet, time: new Date().getTime()};
    tweets.push(newTweet);
    res.type('json');
    res.end(JSON.stringify(newTweet));
})

var server = app.listen(8080);