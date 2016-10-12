# liri-node-app

Rutgers Coding Bootcamp Week 10 assignment was to create a LIRI app similar to that of SIRI on iPhones using Node.js. LIRI is a command line node application that takes in user commands and returns data based of the following commands: 
  
  * 'my-tweets'
  * 'spotify-this-song'
  * 'movies-this'
  * 'do-what-it-says'

##Data that each Command Returns

1. 'node liri.js my-tweets'
  * Displays my last 20 tweeets and when they were created in terminal/bash window.
2. 'node liri.js spotify-this-song <song name>'
  *Displays following information about song in terminal/bash window.
    * Artist(s)
    * The song's name
    * The preview link of the song for Spotify
    * The album that the song is from

  * If user does not input any song then it will default to 'Wanksta' by 50 Cent.
3. `node liri.js movie-this <movie name>`
  * Shows the following information in terminal/bash window about the movie: 
    * Title
    * Year released 
    * IMDB rating
    * Country of production
    * Language  
    * Plot
    * Actors 
    * Rotten Tomatoes Rating
    * Rotten Tomatoes URL
  *If no movie is entered, it will default to 'Mr. Nobody'

  4. 'node liri.js do-what-it-says'
    *Takes text from random.txt and runs the command listed in there (spotify-this-song in this case)

  ##Technologies Used
* Node package managers
  * [Twitter](https://www.npmjs.com/package/twitter)
  * [Spotify](https://www.npmjs.com/package/spotify)
  * [Request](https://www.npmjs.com/package/request)
  * [OMDB API](http://www.omdbapi.com).
  
  ## Built With
  * Sublime Text - Text Editor

  # Authors
  * **Muhammet Aydin** - *node.js* - [Muhammet Aydin](https://github.com/muhammeta7)