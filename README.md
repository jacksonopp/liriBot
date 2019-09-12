# liriBot

###### Written in node.js by Jackson Oppenheim

---

### What is liriBot?

liriBot is a command line interface that allows you to select a program from a list, then, if that program has it, allows you to input a search parameter. It then searches through the proper API to return information on your search term.

### NPM Dependencies

-  axios 0.19.0
-  colors 1.3.3
-  dotenv 8.1.0
-  inquirer 7.0.0
-  moment 2.24.0
-  node-spotify-api 1.1.1
-  validator 11.1.0

### APIs

-  SpotifyAPI
-  OMDb
-  BandsInTown

### Organization

```
project
│   README.md
│   random.txt - allows you to enter parameters for a search
│   package.json
│   package-lock.json
│   liri.js - this is the main app
│
└───node_modules
│   │   all node modules and their dependencies are here
│
└───concert
│   │   concertCLI.js - this is the command line interface for the concert app
│   │   concertSearch - this performs the search query
│
└───movies
│   │   movieCLI.js - this is the command line interface for the movie app
│   │   movieSearch.js - this performs the search query
│
└───spotify
│   │   spotifyCLI.js - this is the command line interface for the spotify app
│   │   spotifySearch.js - this performs the search query
│
└───doWhatItSays
│   │   doWhatItSays.js - takes the an input from random.txt and executes one of the search.js apps
│

```

### How to run the app

** First you must install the npm dependencies **

In your terminal, navigate to the project's root folder, and type:

```
npm add
```
To run the program, make sure you are still in the project's root folder and type:

```
node liri.js
```

The app will then give you a list. You can select an app using the arrow keys and then pressing enter.

```
? Which item would you like to do (Use arrow keys)
> concert
  spotify
  movie
  do what it says
```

If you select any of the first three `concert spotify movie`, the next line will ask you for a search term. You enter your search term and press enter. For example if we want to search for concerts:

```
? Who do you want to search for?
```

The app will then send an `axios.get` request to the appropriate API and return the requested information.

### Demo Video
To see the demo video, download `demo.mov` in the `videos` folder.
