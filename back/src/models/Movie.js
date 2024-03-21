const mongoose = require("mongoose");


const movieSchema = new mongoose.Schema({
    backdrop_path: String,
    genre_ids: Array,
    original_language: String,
    original_title: String,
    overview: String,
    popularity: String,
    poster_path: String,
    release_date: String,
    title: String,
    vote_average: Number,
    vote_count: {
        type: Number,
        max: 32
    }
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie;