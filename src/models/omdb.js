const mongoose = require('mongoose');

const OmdbSchema = new mongoose.Schema ({
    "Title":String,
    "Year":String,
    "Runtime":String,
    "Genre":[String],
    "Actors":[String],
    "Plot":String,
    "Poster":String,
    "imdbRating":String,
    "imdbID":String,
    "Production":String
});

module.exports = mongoose.model("Omdb", OmdbSchema);


// "Title":"Guardians of the Galaxy Vol. 2",
// "Year":"2017",
// "Runtime":"136 min",
// "Genre":"Action, Adventure, Comedy, Sci-Fi",
// "Actors":"Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
// "Plot":"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
// "Poster":"https://m.media-amazon.com/images/M/MV5BN2MwNjJlODAtMTc1MS00NjkwLTg2NDMtYzFjZmU2MGM1YWUwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SX300.jpg",
// "imdbRating":"7.6",
// "imdbVotes":"496,865",
// "imdbID":"tt3896198",
// "Production":"Walt Disney Pictures"