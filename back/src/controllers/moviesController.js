const movieService = require("../services/movieService")

module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const genreId = req.query.genreid;

            let movies;

            if (genreId) {
                movies = await movieService.getMovie(genreId);
            }

            res.json(movies);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    postMovie: async (req, res) => {
        try {
            await movieService.addMovie(req.body)
            res.status(201).json({ message: "Producto creado exitosamente" })
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
}