const axios = require("axios")

const renderElement = (film, id) => {
    const container = document.getElementById(id);
    const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit id perferendis excepturi expedita ratione, vitae quaerat aperiam optio, et aliquam voluptatum possimus placeat quia natus dolores."
    if (container) {
        container.classList.add("d-flex");
        const card = document.createElement("div");
        card.className = "cards";
        if (id === "mas_vistos") {
            card.innerHTML = `
            
                <h3 class= "mb-3">${film.title}</h3>
            <div class="cards_popular">
                <div class="container_img">
                    <img src='https://image.tmdb.org/t/p/w500/${film.poster_path}'>
                </div>
                <div class="container_data">
                    <p class= "overview ${film.overview.length > 161 ? "scroll" : ""}">${film.overview.length > 0 ? film.overview : lorem}</p>
                    <p>Popularidad: ${film.popularity}</p>
                    <p>Cantidad de votos: ${film.vote_count}</p>
                    <p> Fecha de lanzamiento: ${film.release_date}</p>
                </div>
            </div>`
        } else {
            card.innerHTML = `
            <div class="content">
                <div class="front" style="background-image: url('https://image.tmdb.org/t/p/w500/${film.poster_path}')">
                </div>
                <div class="back" style="background-image: url('https://image.tmdb.org/t/p/w500/${film.poster_path}')">
                    <div class="opacity">
                        <span class="title_film">${film.title}</span>
                        <p class= "overview ${film.overview.length > 161 ? "scroll" : ""}">${film.overview.length > 0 ? film.overview : lorem}</p>
                        <p>${film.release_date}</p>
                    </div>
                </div>
            </div>
        `;
        }
        container.appendChild(card);
    }
};

const posterElement = () => {
    const container = document.getElementById("container_poster");
    container.className = "container-xl mt-3";
    container.innerHTML = `<img src="../assets/img/66923.jpg" width=100% alt="Poster main">`;
}

const processMovies = async (genreId, containerId) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=633b5d2151e75abd9ef188f9ef2de1c0&language=es&with_genres=${genreId}`);
        const data = response.data;
        const movies = data.results;
        movies.forEach(film => {
            renderElement(film, containerId);
        });
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    processMovies,
    posterElement,
    renderElement

}