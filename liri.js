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
for ( var i = 3; i<nodeArgv.length; i++){
  if (i>3 && i<nodeArgv.length){
    s = s + '+' + nodeArgv[i];
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
  
  case 'spotify-this-song':
    if (s) {
      spotifySong(s);
    }
    else{
      spotifySong('Gangsters Paradise');
    }
  break;

  case 'movie-this':
    if (s) {
      movieInfo(s)
    }
    else{
      movieInfo('Mr. Nobody')
    }
  break;

  case 'do-what-it-says':
    justDoIt();
  break;

  default:
    console.log('{Enter one of the following commands: my-tweets, spotify-this-song, movies-this, do-what-it-says}');
  break;
}


// Logic for Twitter command
function myTweets(){
  var screenName = {screen_name: 'muhammeta27'};
  client.get('statuses/user_timeline', screenName, function(error, tweets, response) {
    if (!error) {
      for (var i=0; i<tweets.length; i++){
        var postDate = tweets[i].created_at;
        console.log('@Muhammeta27: ' + tweets[i].text + " Tweeted at: " + postDate);
        console.log('-------------------');

        // append info to log.txt[1
        fs.appendFile('log.txt', '@Muhammeta27: ' + tweets[i].text + ' Tweeted At: ' + postDate.substring(0, 19) + '\r\n'
          + '-------------------------------------------------------------' + '\r\n');
      }
    }
    else{
      console.log(error);
    }
  });
}

// Logic for Spotify command
function spotifySong(s){
  spotify.search({ type: 'track', query: s }, function( error, data) {
    console.log(s);
    if(s == ''){
      console.log('Artist: 50 Cent')
    } else{
      console.log('Yeaaaa boyiiiiiiiiiiii');
      if( !error ){
        for( var i=0; i<data.tracks.items.length; i++){
          var songInfo = data.tracks.items[i];
          // Lists artists, song name, preview link of song from Spotify, and album of song
          console.log('Artist: ' + songInfo.artists[0].name);
          console.log('Song: ' + songInfo.name);
          console.log('Preview URL: ' + songInfo.preview_url);
          console.log('Album: ' + songInfo.album.name);
          console.log('-------------------------------------------------------------');
          
          // append info to log.txt
          fs.appendFile('log.txt', '-------------------------------------------------------------' + '\r\n'
            + songInfo.artists[0].name + '\r\n'
            + songInfo.name + '\r\n'
            + songInfo.preview_url + '\r\n'
            + songInfo.album.name + '\r\n'
            + "-------------------------------------------------------------" + '\r\n' );
        }
      }
      else {
        console.log('Error!');
      }
    }
  });
}



// Logic to get OMDB info
function movieInfo(s){
  var omdbURL = 'http://www.omdbapi.com/?t=' + s + '&plot=short&tomatoes=true';
  request(omdbURL, function (error, response, body){
    if(!error && response.statusCode == 200){
      var body = JSON.parse(body);
      console.log("Title: " + body.Title);
      console.log("Release Year: " + body.Year);
      console.log("IMdB Rating: " + body.imdbRating);
      console.log("Country: " + body.Country);
      console.log("Language: " + body.Language);
      console.log("Plot: " + body.Plot);
      console.log("Actors: " + body.Actors);
      console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
      console.log("Rotten Tomatoes URL: " + body.tomatoURL);
      // append info to log.txt 
      fs.appendFile('log.txt', '-------------------------------------------------------------' + '\r\n'
        + "Title: " + body.Title +  '\r\n'
        + "Release Year: " + body.Year +  '\r\n'
        + "IMdB Rating: " + body.imdbRating +  '\r\n'
        + "Country: " + body.Country +  '\r\n'
        + "Language: " + body.Language +  '\r\n'
        + "Plot: " + body.Plot +  '\r\n' 
        + "Actors: " + body.Actors +  '\r\n'
        + "Rotten Tomatoes Rating: " + body.tomatoRating +  '\r\n'
        + "Rotten Tomatoes URL: " + body.tomatoURL +  '\r\n'
        + '-------------------------------------------------------------' + '\r\n');
    }
    if ( s  == '' ){
      console.log('-------------------------------------------------------------' + '\r\n' 
        + "If you haven't watched 'Mr. Nobody,' then you should: " + '\r\n'
        + "http://www.imdb.com/title/tt0485947/" + '\r\n'
        + "It's on Netflix!" + '\r\n'
        + '--------------------------------------' + '\r\n');
      fs.appendFile('log.txt', '-------------------------------------------------------------' + '\r\n' 
        + "If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/" + '\r\n'
        + "It's on Netflix!" + '\r\n'
        + '-------------------------------------------------------------' + '\r\n');
    }
    else{
      console.log('Error!');
    }
  });
}


// Logic to get do-what-it-says info
function justDoIt(){
  fs.readFile('random.txt', 'utf8', function(error,data){
    var text = data.split(',');
    spotifySong(text[1]);
  });
}







