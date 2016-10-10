// Get info fromkeys.js
var fs = require('fs')
var keys = require('./keys.js');
var twitter = require('twitter');
var spotify = require('spotify');
var client = new twitter(keys.twitterKeys);
var request = require('request');


// Arguments array
var nodeArgv = process.argv;
var command = process.argv[2];
// Add empty array so I can parse data


// Variable for movie or song 
var s = "";
for ( var i = 3; i<nodeArgv.length;i++){
  if (i>3 && i<nodeArgv.length){
    s = s + "+" + nodeArgv[i];
  }
  else{
    s = s + nodeArgv[i];
  }
}

// Logic for command selection
switch(command){
  case 'my-tweets':
    myTweets();
  break;
  
  // case 'spotify-this-song':
  //   myTweets();
  // break;

  // case 'movies-this':
  //   myTweets();
  // break;

  // case 'do-what-it-says':
  //   myTweets();
  // break;

  default:

    console.log('{Enter one of the following commands: my-tweets, spotify-this-song, movies-this, do-what-it-says')
}


// Logic for Twitter command
function myTweets(){
  var screenName = {screen_name: 'muhammeta27'};
  client.get('statuses/user_timeline', screenName, function(error, tweets, response) {
      if(!error){
        for (var i=0;i<tweets.length;i++){
          var postDate = tweets[i].created_at
          console.log('@Muhammeta27: ' + tweets[i].text = "Tweeted at: " + postDate);
          console.log('-------------------');
        }
      }
      else{
        console.log('Error!');
      }
    });
}












 // // Logic for Spotify
 // else if ( command = 'spotify-this-song'){
  
 // }
 // // Logic for IMDB
 // else if ( command = 'movie-this'){
  
 // }
 // // Logic for do-what-it-says
 // else if ( command = 'do-what-it-says'){
  
 // }