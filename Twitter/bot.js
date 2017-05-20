var ngrams = {};

console.log('the replier bot is starting');

var Twit = require('twit');

var config = require('./config');
console.log(config);
 
var T = new Twit(config);



var stream = T.stream('user');

stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg) {
	console.log(eventMsg);

	// var name = eventMsg.source.name;
	// var screenName = eventMsg.source.screen_name;
	// tweetIt('@' + screenName + ' do you like rainbows');

	// var fs = require('fs');
	// var json = JSON.stringify(eventMsg, null, 2);
	// fs.writeFile("tweet.json", json);
	

	var replyto = eventMsg.in_reply_to_screen_name;
	var text = eventMsg.text;
	// var puretext = .text;
	var from = eventMsg.user.screen_name;

	console.log(replyto + ' ' + from);


	if (replyto === 'patrickphillan6') {
		// var replace = text.replace(/w/, "abc");
		var replace = text.replace(/([a-z])\w+/g, "a");
		var newtweet = '@' + from + ' thank you for tweeting me!' + replace + ngrams;
		tweetIt(newtweet);

		for (var i=0; i <= text.length; i++) {
			var gram = text.substring(i, i + 3);

			if(!ngrams[gram]) {
				ngrams[gram] = [];
			}
			ngrams[gram].push(text.charAt(i + 3));
		}
		console.log(ngrams);
	}

}



//secondpart

// tweetIt();
// setInterval(tweetIt, 1000*10)

function tweetIt(txt) {


	var tweet = {
		status: txt
	}

	T.post('statuses/update', tweet, tweeted); 

	function tweeted (err, data, response) {
		if (err) {
			console.log("something went wrong");
		} else {
			console.log("it worked");
		}
	  }

}

//firstpart
	


// var params = { 
// 	q: 'rainbow', 
// 	count: 2 
// } 

// T.get('search/tweets', params, gotData); 

// function gotData (err, data, response) {
//   var tweets = data.statuses;
//   for (var i = 0; i < tweets.length; i++) {
//   console.log(tweets[i].text);
// }
//   }
//   