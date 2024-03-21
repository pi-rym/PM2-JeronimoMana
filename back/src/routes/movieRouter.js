const { Router } = require("express")
const moviesController = require("../controllers/moviesController")
const validateMovie = require("../middlewares/validateMovie")

const movieRouter = Router()

movieRouter.get("/", moviesController.getAllMovies)

movieRouter.post("/", validateMovie, moviesController.postMovie)

module.exports = {
    movieRouter
}