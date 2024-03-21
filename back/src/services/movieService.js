const Movie = require("../models/Movie")
let pel = []

module.exports = {
    getMovie: async (genreId) => {
        const movies = await Movie.find({ genre_ids: { $in: [genreId] } });
        return movies
    },
    addMovie: async ({ backdrop_path, genre_ids, original_language, original_title, overview, popularity, poster_path, release_date, title, vote_average, vote_count }) => {
        const newMovie = {
            backdrop_path,
            genre_ids,
            original_language,
            original_title,
            overview,
            popularity,
            poster_path,
            release_date,
            title,
            vote_average,
            vote_count
        }
        pel.push(newMovie)
    }
}