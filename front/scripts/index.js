

const moveCarrusel = () => {
    const container = document.getElementById("container_aventure");

    container.style.transform = 'translateX(-300px)';
    container.style.transition = 'transform 0.5s ease';

}


const renderElement = (film, id) => {
    const container = document.getElementById(id);
    container ? container.className = "d-flex  overflow-hidden" : null;
    const card = document.createElement("div");
    card.className = "cards";
    card.innerHTML = `<span class="title_film">${film.title} </span> <p>${film.release_date}</p> <img src="https://image.tmdb.org/t/p/w500/${film.poster_path}" class="img_card ${film.title.length < 29 ? "margin" : ""}"  alt="Film">`;
    container.appendChild(card);


};

const posterElement = () => {
    const container = document.getElementById("container_poster");
    container.className = "conrainer-xl";
    container.innerHTML = `<img src="../assets/img/66923.jpg" width=100% alt="Poster main">`;
}

const processMovies = (genreId, containerId) => {
    $.get(`https://api.themoviedb.org/3/discover/movie?api_key=633b5d2151e75abd9ef188f9ef2de1c0&language=es&with_genres=${genreId}`, (data, status) => {
        const actData = data.results;
        actData.forEach(film => {
            renderElement(film, containerId);
        });
    });
}

const genres = [
    { id: 12, containerId: "container_aventure" },
    { id: 35, containerId: "container_comedia" },
    { id: 28, containerId: "container_accion" },
    { id: 18, containerId: "container_drama" },
    { id: 27, containerId: "container_terror" },
    { id: 878, containerId: "container_ficcion" },
    { id: 10749, containerId: "container_romance" },
    { id: 99, containerId: "container_documental" },
    { id: 16, containerId: "container_animacion" },
    { id: 80, containerId: "container_crimen" }
];

const controlador = () => {
    genres.forEach(genre => {
        processMovies(genre.id, genre.containerId);
    });
}

controlador();
