const { controlCarrusel } = require("./controlCarrusel.js");
const { processMovies, posterElement } = require("./renderCards.js")
const { renderSection } = require("./renderSection.js")

const genres = [
    { id: 12, containerId: "container_aventure", genre: "Aventura" },
    { id: 35, containerId: "container_comedia", genre: "Comedia" },
    { id: 28, containerId: "container_accion", genre: "Acción" },
    { id: 18, containerId: "container_drama", genre: "Drama" },
    { id: 27, containerId: "container_terror", genre: "Terror" },
    { id: 878, containerId: "container_ficcion", genre: "Ficción" },
    { id: 10749, containerId: "container_romance", genre: "Romance" },
    { id: 99, containerId: "container_documental", genre: "Documental" },
    { id: 16, containerId: "container_animacion", genre: "Animados" },
    { id: 80, containerId: "container_crimen", genre: "Crimen" }
];



const controlador = async () => {
    try {
        posterElement();
        await Promise.all(genres.map(async (genre) => {
            renderSection(genre.id, genre.containerId, genre.genre)
            await processMovies(genre.id, genre.containerId);
            controlCarrusel( genre.containerId, `btn_left${genre.id}`, `btn_right${genre.id}`);
        }));
    } catch (error) {
        window.alert(error)
    }
}

window.addEventListener("load", controlador)