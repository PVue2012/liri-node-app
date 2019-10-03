require("dotenv").config();

let axios = require("axios");
let spotify = require('node-spotify-api');
let fs = require("fs");
let spotifyKeys = require('./keys.js');
let spotify = new spotify(spotifyKeys.spotify);


const [node, file, ...args] = process.args;

if (args[0]=== "movie-this") {
    if(args[1] === undefined) {
        getMovie("Mr.+Nobody");
    }
    else {
        getMovie(args.slice(1).join("+"));
        let songTitle = args.slice(1).join(" ");
    }
};

if (args[0] === "spotify-this-song") {
    if(args[1] === undefined) {
        spotifySong("The Sign");
    }
    else {
        let songTitle = args.slice(1).join(" ");
        spotifySong(songtitle);
    }
};

if (args[0] === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }

        dataArr = data.split(",");
        if (dataArr[0] === "movie-this") {
            if (dataArr[1] === undefined) {
                getMovie("Mr.+Nobody")
            }
            else {
                getMovie(dataArr[1].split().join("+"))
            }
        };
        if (dataArr[0] === "spotify-this-song") {
            if (dataArr[1] === undefined) {
                spotifySong("The Sign")
            }
            else {
                spotifySong(dataArr[1])
            }
        };
    });
};

function spotifySong(songName) {
    spotify.search({ type: 'track', query: songName, limit: 5 }, function (err, data {
        if (err) {
            return console.log();
        }
        data.tracks.items.forEach(function (element) {
            console.log("");
            console
        });

    })
};

