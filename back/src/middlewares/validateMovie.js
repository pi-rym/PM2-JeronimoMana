const validateMovie = (req, res, next) => {

    const { title } = req.body

    if (![title].every(Boolean)) return res.status(400).json({ message: "Faltan datos por completar" })

    next()

}

module.exports = validateMovie;