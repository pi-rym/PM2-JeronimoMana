const axios = require("axios")
const { renderElement } = require("./renderCards")

const getPopularMovies = async () => {
    const apiKey = '633b5d2151e75abd9ef188f9ef2de1c0';
    const language = 'es';
    const totalPages = 5;

    let popularMovies = [];

    for (let page = 1; page <= totalPages; page++) {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
            params: {
                api_key: apiKey,
                language: language,
                page: page,
                sort_by: 'popularity.desc'
            }
        });
        popularMovies = [...popularMovies, ...response.data.results];
    }

    return popularMovies;
};



document.addEventListener('DOMContentLoaded', async () => {
    const id = "mas_vistos";
    try {
        const popularMovies = await getPopularMovies();
        
        popularMovies.slice(0, 10).map(film => {
            renderElement(film, id);
        });
    } catch (error) {
        console.error('Error al obtener películas populares:', error);
    }
});