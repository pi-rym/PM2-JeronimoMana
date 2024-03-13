const { controlCarrusel } = require("./controlCarrusel.js");
const { processMovies, posterElement } = require("./renderCards.js")

const genres = [
    { id: 12, containerId: "container_aventure" },
    { id: 35, containerId: "container_comedia" },
    // { id: 28, containerId: "container_accion" },
    // { id: 18, containerId: "container_drama" },
    // { id: 27, containerId: "container_terror" },
    // { id: 878, containerId: "container_ficcion" },
    // { id: 10749, containerId: "container_romance" },
    // { id: 99, containerId: "container_documental" },
    // { id: 16, containerId: "container_animacion" },
    // { id: 80, containerId: "container_crimen" }
];

const contro = async () => {
    posterElement();
    await Promise.all(genres.map(genre => processMovies(genre.id, genre.containerId)));
};

const controlador = async () => {
    await contro();
    setTimeout(() => {
        genres.map(genre => {
            controlCarrusel(genre.id, genre.containerId);
        });
    }, 1000);
}

window.addEventListener("load", controlador)